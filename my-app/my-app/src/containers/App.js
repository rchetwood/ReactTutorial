import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // state gets initialized and super(props) must be called
  constructor(props) {
    super(props);
    console.log("[App.js]\t constructor");
  }

  state = {
    persons: [
      { id: 1, name: "Riley", age: 26 },
      { id: 2, name: "Luz", age: 25 },
      { id: 3, name: "Lauren", age: 30 }
    ],
    showPersons: true,
    showCockpit: true
  };

  // L.C. hook: On creation & update
  // must be static
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js]\t getDerivedStateFromProp");
    return state;
  }

  // L.C. hook: On update
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js]\t shouldComponentUpdate');
    return true;
  }

  // L.C. hook: On update
  componentDidUpdate() {
    console.log('[App.js]\t componentDidUpdate');
  }

  // L.C. hook: On creation & update
  render() {
    console.log('[App.js]\t render');
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
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.toggleNameHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }

  // L.C. hook: On creation
  componentDidMount() {
    console.log("[App.js]\t componentDidMount");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [
      ...this.state.persons
    ];
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
}

export default App;
