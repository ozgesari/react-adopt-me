import React, {useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
 const [personsState, setPersonsState] = useState({
    persons : [
      { name : 'Yazmin', age:5},
      { name : 'Arya', age:3},
      { name : 'Yamac', age:2}
  ]
 });
//replaces the old one not merges! This is super important!If you want to get the old data the elegant way is using useState('someOtherValue')
 const [otherState, setOtherState]= useState({otherState: 'some other value'})

 console.log(personsState,otherState);

 const switchNameHandler = () => {
   setPersonsState({ 
     persons : [
     { name : 'Yazmin', age:4},
     { name : 'Arya', age:3},
     { name : 'Yamac', age:1}
 ]})
 }


  return (
    <div className="App">
    <h1>Hello, it's me.</h1>
    <p>This is really working!</p>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Codding❤️🧿 </Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
   ) 
  }

export default App;


