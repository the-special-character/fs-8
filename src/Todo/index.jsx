import React, { forwardRef, memo } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';
import todoHOC from '../HOC/todoHOC'

const Todo = forwardRef(({ loadTodoData, addTodo, toggleComplete, deleteTodo, todoList, filterType}, ref) => (
    <main className="flex flex-col items-center h-screen">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        ref={ref}
      />
      <TodoList
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        todoList={todoList}
      />
      <TodoFilter filterTodo={loadTodoData} filterType={filterType} />
    </main>
  ))



export default todoHOC(memo(Todo))
