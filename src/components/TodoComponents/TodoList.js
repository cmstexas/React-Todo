import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)

  return (
    <div className="todo-list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.cleaCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;











// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
