import React, { Component, createRef } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import Test from './test';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
  };

  data = [];

  inputRef = createRef();

  async componentDidMount() {
    try {
      const res = await fetch(
        'http://localhost:3004/todoList',
      );
      const todoList = await res.json();
      this.setState({ todoList });
    } catch (error) {}
  }

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

      this.setState(
        ({ todoList }) => ({
          todoList: [todoItem,...todoList, ],
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

      this.setState(({ todoList }, props) => {
        const i = todoList.findIndex(x => x.id === item.id);
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
      const i = todoList.findIndex(x => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, i),
          ...todoList.slice(i + 1),
        ],
      };
    });
  } catch (error) {
      
  }
  };

  filterTodo = filterType => {
    this.setState({ filterType });
  };

  render() {
    console.log('render');

    return (
      <main className="flex flex-col items-center h-screen">
        <h1>Todo App</h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.inputRef}
          data={this.data}
        />
        <TodoList
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
          {...this.state}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </main>
    );
  }
}
