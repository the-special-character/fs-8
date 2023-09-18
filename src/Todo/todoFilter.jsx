import React, { memo } from 'react';

function TodoFilter({ filterTodo }) {
    console.log("Filter todo");
  return (
    <div className="filter w-full flex">
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => filterTodo('all')}
      >
        ALL
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default  memo(TodoFilter);
