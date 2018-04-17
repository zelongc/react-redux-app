import React, { Component } from 'react';
import logo from './logo.svg';
import MainContainer from './containers/mainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainContainer />
      </div>
    );
  }
}

export default App;
