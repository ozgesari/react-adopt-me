import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "fsdfd", name: "Yazmin", age: 5 },
      { id: "fdsf", name: "Arya", age: 3 },
      { id: "fsdfsdfsdfd", name: "Yamac", age: 2 },
    ],
    otherState: "Some other state",
    showPersons: false,
  };
    // container, stateful, smart component
    // presentational, stateless or dump
    // replaces the old one, not merges! This is super important!If you want to get the old data the elegant way is using useState('someOtherValue')

  deletePersonHandler = (personIndex) => {
    // const doesShow =this.state.showPersons.slice() slice without argument copies the full array.;
    // es6 feaure spread feature. new array with the object from the old array, not the old array itself
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  NameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];




    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.NameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <h1>Hello, it's me.</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.toggleNameHandler}>
          Toogle Name
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
