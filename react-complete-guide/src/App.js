import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
  return (
    <div className="App">
    <h1>Hello, it's me.</h1>
    <p>This is really working!</p>
    <Person name='Yazmin' age='5' />
    <Person name='Eray' age='20'>My Hobbies: Codding❤️🧿 </Person>
    <Person name='Yamac' age='2'/>
    </div>
  )
 }
}

export default App;
