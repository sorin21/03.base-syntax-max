import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Steph", age: 26}
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('click');
    // this.state.persons[0].name='Maximilian
    this.setState(() => ({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Steph", age: 26 }
      ]
    }));
  }

  nameChangeHandler = (event) => {
    const target = event.target.value;
    console.log('target', target);
    this.setState(() => ({
      persons: [
        { name: 'Max', age: 28 },
        { name: target, age: 29 },
        { name: "Steph", age: 26 }
      ]
    }));
  }
  render() {
    return <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={() => this.switchNameHandler('Sorin')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}>
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>;
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
