import React, { Component } from "react";
import styled from "styled-components";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? "red" : "green"};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

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
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    return (
      <div className="App">
        <h1>Hello, it's me.</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.toggleNameHandler}>
          Toogle Name
        </StyledButton>
        {persons}
      </div>
    );
  }
}
export default App;
