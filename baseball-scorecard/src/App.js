import React, { Component } from 'react';
import './App.css';
import BaseballField from './components/BaseballField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseballField height={500} />
      </div>
    );
  }
}

export default App;
