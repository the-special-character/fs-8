import React, { memo } from 'react';
import clsx from 'clsx'
import { useTodo } from '../context/todoContext';

function TodoFilter() {
  const {loadTodo, filterType} = useTodo()
  return (
    <div className="filter w-full flex">
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'all'
        })}
        onClick={() => loadTodo('all')}
      >
        ALL
      </button>
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'pending',
        })}
        onClick={() => loadTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={clsx('btn rounded-none flex-1', {
          'bg-orange-400 hover:bg-orange-500': filterType === 'completed',
        })}
        onClick={() => loadTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default  memo(TodoFilter);
