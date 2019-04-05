import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Movies />
      </div>
    );
  }
}

export default App;
