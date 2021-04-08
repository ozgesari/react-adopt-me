import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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


  // First way!!!
  // Let's say accidentally userId instead of id.When you type in input, you wont be able to see the error that occurs.
  // You can use Chrome dev tool, then go Sources, map the file you work on it. Put a breakpoint to chase it.

  // Second way!!!
  // Using Error Boundaries!!




  NameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.userId === id;
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

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.NameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleNameHandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;
