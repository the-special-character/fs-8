import React, { memo } from 'react';
import { TodoContext } from '../context/todoContext';

function TodoForm() {
  return (
    <TodoContext.Consumer>
      {({ addTodo, inputRef }) => (
        <form className="flex my-10" onSubmit={addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              ref={inputRef}
              type="text"
              id="todoText"
              className="rounded-l-md"
            />
          </div>
          <button
            type="submit"
            className="btn rounded-l-none"
          >
            Add Todo
          </button>
        </form>
      )}
    </TodoContext.Consumer>
  );
}

TodoForm.displayName = 'TodoForm';

export default memo(TodoForm);
