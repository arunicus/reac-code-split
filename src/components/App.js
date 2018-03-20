import React, { Component } from 'react';
import Inventions from './inventions/Inventions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Inventions</h1>
        </header>
        <Inventions />
      </div>
    );
  }
}

export default App;
