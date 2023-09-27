import React, { memo } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';

function Todo() {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </main>
  );
}

export default memo(Todo);
