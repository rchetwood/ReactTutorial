import React, { Component } from 'react';
import './App.css';
import './CharComponent/CharComponent.css'
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userText: "This is Sparta!",
    textLength: "This is Sparta!".length
  };

  changeLengthHandler = (event) => {
    this.setState({
      userText: event.target.value,
      textLength: event.target.value.length
    });
  };

  removeCharHandler = (index) => {
    let userTextArray = this.state.userText.split("");
    userTextArray.splice(index, 1);
    const userText = userTextArray.join("");
    this.setState({ 
      userText: userText,
      textLength: userText.length
    });
  }

  render() {

    let chars = (
      <div>
        {this.state.userText.split("").map((c, index) => {
          return <CharComponent
                  key={index}
                  char={c}
                  clicked={() => this.removeCharHandler(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>React Tutorial - Assignment 2</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.changeLengthHandler} />
        <p >
          Length: {this.state.textLength}
        </p>
        <ValidationComponent length={this.state.textLength} />

        {chars}

      </div>
    );
  }
}

export default App;
