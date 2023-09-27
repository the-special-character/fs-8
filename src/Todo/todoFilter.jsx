import React, { memo } from 'react';
import clsx from 'clsx';
import { TodoContext } from '../context/todoContext';

function TodoFilter() {
  return (
    <TodoContext.Consumer>
      {({ filterType, loadTodoData }) => (
        <div className="filter w-full flex">
          <button
            type="button"
            className={clsx('btn rounded-none flex-1', {
              'bg-orange-400 hover:bg-orange-500':
                filterType === 'all',
            })}
            onClick={() => loadTodoData('all')}
          >
            ALL
          </button>
          <button
            type="button"
            className={clsx('btn rounded-none flex-1', {
              'bg-orange-400 hover:bg-orange-500':
                filterType === 'pending',
            })}
            onClick={() => loadTodoData('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className={clsx('btn rounded-none flex-1', {
              'bg-orange-400 hover:bg-orange-500':
                filterType === 'completed',
            })}
            onClick={() => loadTodoData('completed')}
          >
            Completed
          </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoFilter);
