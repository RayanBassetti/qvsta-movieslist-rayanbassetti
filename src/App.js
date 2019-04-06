import React, { Component } from 'react';
import Movies from './js/components/Movies.js';
import Header from './js/components/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
