import React, { Component } from 'react';
import './App.css';
import SimpleBaseballField from './components/SimpleBaseballField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleBaseballField height={500} />
      </div>
    );
  }
}

export default App;
