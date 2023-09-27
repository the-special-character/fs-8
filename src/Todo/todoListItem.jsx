import React, { memo } from 'react';
import { TodoContext } from '../context/todoContext';

function TodoListItem({ item }) {
  console.log('render todo Item');
  return (
    <div
      key={item.id}
      className="todoItem flex items-center m-4"
    >
      <TodoContext.Consumer>
        {({ toggleComplete }) => (
          <div>
            <label
              htmlFor="isCompleted"
              className="sr-only"
            >
              Is Completed
            </label>
            <input
              type="checkbox"
              name="isCompleted"
              id="isCompleted"
              checked={item.isDone}
              onChange={() => toggleComplete(item)}
            />
          </div>
        )}
      </TodoContext.Consumer>

      <p className="flex-1 mx-4 line-clamp-1">
        {item.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo }) => (
          <button
            type="button"
            className="btn"
            onClick={() => deleteTodo(item)}
          >
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
}

export default memo(TodoListItem);
