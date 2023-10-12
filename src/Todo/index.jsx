import React, { forwardRef, memo, useContext, useRef } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import { useTodo } from '../context/todoContext';

function Todo() {

  const {
    todoList,
    filterType,
    addTodo,
    loadTodo,
    updateTodo,
    deleteTodo
  } = useTodo()


  return (
    <main className="flex flex-col items-center h-screen">
      {/* <dialog
        className="backdrop:bg-gray-50/50"
        ref={loadingDialogRef}
      >
        <h1>loading...</h1>
      </dialog>
      <dialog
        className="backdrop:bg-gray-50/50"
        ref={errorDialogRef}
      ></dialog> */}
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList
        toggleComplete={updateTodo}
        deleteTodo={deleteTodo}
        todoList={todoList}
      />
      <TodoFilter
        filterTodo={loadTodo}
        filterType={filterType}
      />
    </main>
  );
}

export default memo(Todo);
