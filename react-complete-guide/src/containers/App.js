import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: "fsdfd", name: "Yazmin", age: 5 },
      { id: "fdsf", name: "Arya", age: 3 },
      { id: "fsdfsdfsdfd", name: "Yamac", age: 2 },
    ],
    otherState: "Some other state",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };



  componentDidMount() {
    console.log('[App.js] componentDidMount');
    console.log(this.context.login);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Super important to keep that in mind. You change the state and depend on old state.
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personLength={this.state.persons.length}
              clicked={this.toggleNameHandler}
            /> : null
          }
          {persons}
        </AuthContext.Provider>
      </div >
    );
  }
}
export default App;
