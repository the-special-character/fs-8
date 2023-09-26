import React, { forwardRef, memo } from 'react';
import ThemeContext from '../context/themeContext';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('todo form');
  return (
    <form className="flex my-10" onSubmit={addTodo}>
      <div>
        <label htmlFor="todoText" className="sr-only">
          Todo Text
        </label>
        <input
          ref={ref}
          type="text"
          id="todoText"
          className="rounded-l-md"
        />
      </div>
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
      <ThemeContext.Consumer>
        {({ switchTheme }) => (
          <button className="btn" type='button' onClick={switchTheme}>
            Switch Theme
          </button>
        )}
      </ThemeContext.Consumer>
    </form>
  );
});

TodoForm.displayName = 'TodoForm';

export default memo(TodoForm);
