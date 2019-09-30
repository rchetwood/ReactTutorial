import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Urazi'
  };

  changeUserHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment 1 - React Tutorial</h1>

        <UserInput 
          change={this.changeUserHandler} 
          username={this.state.username}/>
        <UserOutput 
          username={this.state.username} />  
        <UserOutput 
          username={this.state.username} /> 

      </div>
    );
  }
}

export default App;
