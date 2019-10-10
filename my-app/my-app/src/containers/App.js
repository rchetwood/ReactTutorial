import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClassFunc';
import Aux from '../hoc/Auxilary';
import AuthContext from '../context/auth-context'

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
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

  loginHandler = () => {
    this.setState({isAuthenticated: true});
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
    this.setState((prevState, props) => {
      return ({
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      });
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
      <Aux>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Remove Cockpit
        </button>
        <AuthContext.Provider value={
          {
            authenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }
        }>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.toggleNameHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }

  // L.C. hook: On creation
  componentDidMount() {
    console.log("[App.js]\t componentDidMount");
  }
}

export default withClass(App, classes.App);
