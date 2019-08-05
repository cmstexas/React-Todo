import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


const taskData = [
  {
    name: 'Wash the Car',
    id: 100,
    completed: false
  },
  {
    name: 'Pack Sunglasses',
    id: 101,
    completed: false
  },
  {
    name: 'Wash Beach Towel',
    id: 102,
    completed: false
  },
  {
    name: 'Remember sunscreen',
    id: 103,
    completed: false
  },
  {
    name: 'Check tire pressure',
    id: 104,
    completed: false
  },
  {
    name: 'Pack laptop',
    id: 105,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        // name: 'Crystal',
        tasks: taskData
        };
      }
    

    toggleItem = id => {
      console.log(id);

      this.setState({
        tasks: this.state.tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      });
    };


    addItem = itemName => {
      const newItem = {
        name: itemName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        tasks: [...this.state.tasks, newItem]
      });
    };
  
    clearCompleted = () => {
      this.setState({
        tasks: this.state.tasks.filter(item => !item.completed)
      });
    };
  
    render() {
      return (
        <div className="App">
          <div className="header">
            <h1>To Do List</h1>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            tasks={this.state.tasks}
            toggleItem={this.toggleItem}
          />
        </div>
      );
    }
  }

export default App;
