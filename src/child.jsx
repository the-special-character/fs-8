import React, { memo } from 'react';

function Child({ name }) {
  console.log('render child');
  return (
    <div>
      <h1>Child Component</h1>
      <div>{name}</div>
    </div>
  );
}

export default memo(Child);
