import React, { memo} from 'react';

function TodoListItem({item, toggleComplete, deleteTodo}) {
    console.log("render todo Item");
  return (
    <div
      key={item.id}
      className="todoItem flex items-center m-4"
    >
      <div>
        <label htmlFor="isCompleted" className="sr-only">
          Is Completed
        </label>
        <input
          type="checkbox"
          name="isCompleted"
          id="isCompleted"
          checked={item.isDone}
          onChange={() => toggleComplete({...item, isDone: !item.isDone})}
        />
      </div>
      <p className="flex-1 mx-4 line-clamp-1">
        {item.text}
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
    </div>
  );
}

export default memo(TodoListItem);
