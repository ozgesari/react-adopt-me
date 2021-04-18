import React, { Component } from "react";
import Person from "./Person/Person";



class Persons extends Component {



    // If you are sure , where your parent updates, yoy will need to update too. Then you should not add
    // shouldComponentUpdate or React.memo. Because you will execute some extra logic.It slows odwn the applicantion
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        if (nextProps.persons) {
            return true;
        }
        else {
            return false
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] this.getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        })
    }
}


export default Persons;