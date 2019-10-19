import React, { Component } from 'react';
import './App.css';
import SimpleBaseballField from './components/BaseballField/SimpleBaseballField';
import ScoreBox from './components/BaseballField/ScoreBox/Scorecard'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ScoreBox height={400} />

      </div>
    );
  }
}

export default App;
