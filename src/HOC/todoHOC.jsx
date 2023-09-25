import React, {
  PureComponent,
  createRef,
}  from 'react';

export default WrappedComponent => {
  class HOCComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        todoList: [],
        filterType: 'all',
      };

      this.inputRef = createRef();
    }

    componentDidMount() {
      this.loadTodoData();
    }

    loadTodoData = async (filterType = 'all') => {
      try {
        let url = 'http://localhost:3004/todoList';
        if (filterType !== 'all') {
          url += `?isDone=${filterType === 'completed'}`;
        }
        const res = await fetch(url);
        const json = await res.json();
        this.setState({ todoList: json, filterType });
      } catch (error) {}
    };

    addTodo = async event => {
      try {
        event.preventDefault();
        const todoText = this.inputRef.current;

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

        // this.loadTodoData();

        this.setState(
          ({ todoList }) => ({
            todoList: [...todoList, todoItem],
          }),
          () => {
            this.inputRef.current.value = '';
          },
        );
      } catch (error) {}
    };

    toggleComplete = async item => {
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

        this.setState(({ todoList }) => {
          const i = todoList.findIndex(
            x => x.id === item.id,
          );
          return {
            todoList: [
              ...todoList.slice(0, i),
              todoItem,
              ...todoList.slice(i + 1),
            ],
          };
        });
      } catch (error) {}
    };

    deleteTodo = async item => {
      try {
        await fetch(
          `http://localhost:3004/todoList/${item.id}`,
          {
            method: 'DELETE',
          },
        );

        this.setState(({ todoList }, props) => {
          const i = todoList.findIndex(
            x => x.id === item.id,
          );
          return {
            todoList: [
              ...todoList.slice(0, i),
              ...todoList.slice(i + 1),
            ],
          };
        });
      } catch (error) {}
    };

    render() {
      return <WrappedComponent loadTodoData={this.loadTodoData} addTodo={this.addTodo} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}  {...this.state} ref={this.inputRef} />;
    }
  }

  HOCComponent.propTypes = {};

  return HOCComponent;
};
