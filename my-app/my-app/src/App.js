import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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
    console.log("Deleting.");
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    // inline styles is good for scoping to a specific component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // recommended way of showing conditional compenents
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age} 
                key={index} 
                changed={(event) => this.nameChangeHandler(event, person.id)}
                clicked={() => this.clickToDeleteHandler(index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>

        <button
          style={style}
          onClick={this.toggleNameHandler}>
          Toggle name
        </button>

        {persons}

      </div>
    );
  }
}

export default App;
