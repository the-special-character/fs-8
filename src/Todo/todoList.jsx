import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { TodoContext } from '../context/todoContext';

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todoList }) => (
        <div className="todoList w-full flex-1">
          {todoList.map(item => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoList);
