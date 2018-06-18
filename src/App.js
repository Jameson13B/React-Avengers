import React, { Component } from 'react';
import './App.css';
import avengers from './avengerData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers: by Jameson</h1>
        </header>
        {this.state.avengers.map(avenger => {
          return (
            <li className="App-title">
              Name: {avenger.name} - Actor: {avenger.actor}
            </li>
          )
        })}
      </div>
    );
  }
}

export default App;
