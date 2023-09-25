import React, { memo } from 'react';
import clsx from 'clsx'

function TodoFilter({ filterTodo, filterType }) {
  return (
    <div className="filter w-full flex">
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'all'
        })}
        onClick={() => filterTodo('all')}
      >
        ALL
      </button>
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'pending',
        })}
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'completed',
        })}
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default  memo(TodoFilter);
