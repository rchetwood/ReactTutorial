import React, { Component } from 'react';
import './App.css';
import SimpleBaseballField from './components/BaseballField/SimpleBaseballField';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SimpleBaseballField height={400} />
        <SimpleBaseballField height={500} />
        <SimpleBaseballField height={600} />
        <SimpleBaseballField height={1200} />

      </div>
    );
  }
}

export default App;
