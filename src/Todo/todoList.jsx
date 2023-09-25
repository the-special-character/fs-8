import React, { memo } from 'react';
import TodoListItem from './todoListItem';

function TodoList({
  todoList,
  toggleComplete,
  deleteTodo,
}) {
  return (
    <div className="todoList w-full flex-1">
      {todoList.map(item => (
          <TodoListItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
}

export default memo(TodoList);
