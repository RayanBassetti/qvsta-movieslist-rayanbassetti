import React, { Component } from 'react';
import Movies from './js/components/Movies.js';
import Header from './js/components/Header.js';
import Search from './js/components/Search.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Movies />
      </div>
    );
  }
}

export default App;
