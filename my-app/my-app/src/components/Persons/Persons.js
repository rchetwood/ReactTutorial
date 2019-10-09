import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // used for optimization
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js]\t shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else { 
  //     return false;
  //   }
  // }

  // get previous state
  // usage ex: where the user is on the page before update  
  // to return to that spot
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js]\t getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js]\t componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js]\t componentWillUnmount');
  }

  render() {
    console.log('[Persons.js]\t rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
