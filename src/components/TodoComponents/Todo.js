import React from 'react';

const Todo = props => {
  return (
    <div
      className={`Todo${props.item.completed ? 'completed' : null}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;