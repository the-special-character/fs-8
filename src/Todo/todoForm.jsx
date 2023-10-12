import React, { memo, useRef } from 'react';
import { useTodo } from '../context/todoContext';

function TodoForm() {
  const todoTextRef = useRef(null);
  const { addTodo } = useTodo()
  return (
    <form
      className="flex my-10"
      onSubmit={e => {
        e.preventDefault();
        const todoText = todoTextRef.current;
        if (todoText) {
          addTodo({
            text: todoText.value,
            isDone: false,
          });
          todoText.value = ""
        }
      }}
    >
      <div>
        <label htmlFor="todoText" className="sr-only">
          Todo Text
        </label>
        <input
          ref={todoTextRef}
          type="text"
          id="todoText"
          className="rounded-l-md"
        />
      </div>
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
    </form>
  );
}

TodoForm.displayName = 'TodoForm';

export default memo(TodoForm);
