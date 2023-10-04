import React, {
  PureComponent,
  createRef,
  useEffect,
  useRef,
  useState,
} from 'react';

export default WrappedComponent => {
  function HOCComponent() {
    const [todoList, setTodoList] = useState([]);
    const [filterType, setFilterType] = useState('all');
    const inputRef = useRef();

    const loadTodoData = async (ft = 'all') => {
      try {
        let url = 'http://localhost:3004/todoList';
        if (ft !== 'all') {
          url += `?isDone=${ft === 'completed'}`;
        }
        const res = await fetch(url);
        const json = await res.json();
        setTodoList(json);
        setFilterType(ft);
      } catch (error) {}
    };

    const addTodo = async event => {
      try {
        event.preventDefault();
        const todoText = inputRef.current;

        const res = await fetch(
          'http://localhost:3004/todoList',
          {
            method: 'POST',
            body: JSON.stringify({
              text: todoText.value,
              isDone: false,
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );

        const todoItem = await res.json();
        setTodoList(val => [...val, todoItem]);
      } catch (error) {}
    };

    const toggleComplete = async item => {
      try {
        const res = await fetch(
          `http://localhost:3004/todoList/${item.id}`,
          {
            method: 'PUT',
            body: JSON.stringify({
              ...item,
              isDone: !item.isDone,
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );

        const todoItem = await res.json();
        setTodoList(val => {
          const i = val.findIndex(x => x.id === item.id);
          return [
            ...val.slice(0, i),
            todoItem,
            ...val.slice(i + 1),
          ]
        });
      } catch (error) {}
    };

    const deleteTodo = async (item) => {
      try {
        await fetch(
          `http://localhost:3004/todoList/${item.id}`,
          {
            method: 'DELETE',
          },
        );

        setTodoList(val => {
          const i = val.findIndex(x => x.id === item.id);
          return [
            ...val.slice(0, i),
            ...val.slice(i + 1),
          ]
        });
      } catch (error) {}
    }

    useEffect(() => {
      loadTodoData();
    }, []);

    return (
      <WrappedComponent
        loadTodoData={loadTodoData}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        ref={inputRef}
        todoList={todoList}
        filterType={filterType}
      />
    );
  }
  
  HOCComponent.propTypes = {};

  return HOCComponent;
};
