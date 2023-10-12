import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export default WrappedComponent => {
  function HOCComponent() {
    const [todoList, setTodoList] = useState([]);
    const [filterType, setFilterType] = useState('all');
    // const [loading, setLoading] = useState(false)
    const inputRef = useRef();
    const loadingDialogRef = useRef()
    const errorDialogRef = useRef()
    const intervalRef = useRef()

    const hideAfterInterval = useCallback(() => {
      intervalRef.current = setInterval(() => { 
        errorDialogRef.current.close();
       }, 5000)
    }, [])


    const loadTodoData = useCallback(async (ft = 'all') => {
      // setLoading(true)
      try {
        loadingDialogRef.current.showModal();
        let url = 'http://localhost:3004/todoList';
        if (ft !== 'all') {
          url += `?isDone=${ft === 'completed'}`;
        }
        // throw new Error("somethig went wrong...")
        const res = await fetch(url);
        const json = await res.json();
        setTodoList(json);
        setFilterType(ft);
      } catch (error) {
        errorDialogRef.current.innerHTML = error.message
        errorDialogRef.current.showModal();
        hideAfterInterval();
      } finally {
        loadingDialogRef.current.close();
      }
    }, []);

    const addTodo = useCallback(async event => {
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
    }, []);

    const toggleComplete = useCallback(async item => {
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
    }, []);

    const deleteTodo = useCallback(async (item) => {
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
    }, [])

    
    useEffect(() => {
      loadTodoData();

      return () => {
        if(intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, [loadTodoData]);

    return (
      <WrappedComponent
        loadTodoData={loadTodoData}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        ref={inputRef}
        todoList={todoList}
        filterType={filterType}
        loadingDialogRef={loadingDialogRef}
        errorDialogRef={errorDialogRef}
      />
    );
  }
  
  HOCComponent.propTypes = {};

  return HOCComponent;
};
