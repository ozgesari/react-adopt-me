import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Yazmin', age: 5 },
      { name: 'Arya', age: 3 },
      { name: 'Yamac', age: 2 }
    ],
    otherState: 'Some other state',
    showPersons: false
  };
  // container, stateful, smart component
  // presentational, stateless or dump
  // replaces the old one, not merges! This is super important!If you want to get the old data the elegant way is using useState('someOtherValue')


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 4 },
        { name: 'Arya', age: 3 },
        { name: 'Yamac', age: 1 }
      ]
    })
  }


  NameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 4 },
        { name: event.target.value, age: 3 },
        { name: 'Yamac', age: 1 }
      ]
    })
  }

  toggleNameHandler = () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello, it's me.</h1>
        <p>This is really working!</p>
        {/* arrow function is inefficient way, use bind intstead. */}
        <button style={style} onClick={ this.toggleNameHandler }>Toogle Name</button>
      { this.state.showPersons ?
        <div>
          <Person
            name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Eray!')}
            changed={this.NameChangeHandler}
          >My Hobbies: Coding❤️🧿 </Person>
          <Person
            name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> : null
      }
      </div>
    )
  }
}
export default App;
