import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: "Riley", age: 26 },
      { name: "Luz", age: 25 },
      { name: "Lauren", age: 30 }
    ],
    showPersons: true
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: "Luz", age: 25 },
        { name: "Lauren", age: 30 }
      ]
    });
  }

  toggleNameHandler = () => {
    const isVisable = this.state.showPersons;
    this.setState({
      showPersons: !isVisable
    });
  }

  render() {

    // inline styles is good for scooping to a specific component
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
          {this.state.persons.map(person => {
            return (
              <Person 
                name={person.name}
                age={person.age} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>

        <button
          style={style}
          onClick={this.toggleNameHandler}>Toggle name</button>

        {persons}

      </div>
    );
  }
}

export default App;
