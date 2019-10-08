import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Riley", age: 26 },
      { id: 2, name: "Luz", age: 25 },
      { id: 3, name: "Lauren", age: 30 }
    ],
    showPersons: true
  };

  nameChangeHandler = (event, id) => {
    // get index of person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // spread operator - this is a copy of person, not reference
    const person = {
      ...this.state.persons[personIndex]
    };

    // change copy
    person.name = event.target.value;

    // get copy of persons array
    const persons = [
      ...this.state.persons
    ];

    // update copy
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleNameHandler = () => {
    const isVisable = this.state.showPersons;
    this.setState({
      showPersons: !isVisable
    });
  }

  clickToDeleteHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    // recommended way of showing conditional compenents
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangeHandler}
        clicked={this.clickToDeleteHandler}
      />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          assignedClasses={assignedClasses.join(' ')}
          buttonClass={buttonClass}
          clicked={this.toggleNameHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
