import React, { memo } from 'react';
import TodoListItem from './todoListItem';

function TodoList({
  todoList,
  filterType,
  toggleComplete,
  deleteTodo,
}) {
  return (
    <div className="todoList w-full flex-1">
      {todoList.map(item => {
        // if (
        //   filterType === 'all' ||
        //   (filterType === 'pending' &&
        //     item.isDone === false) ||
        //   (filterType === 'completed' &&
        //     item.isDone === true)
        // ) {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        );
        // }
        // return null;
      })}
    </div>
  );
}

export default memo(TodoList);
