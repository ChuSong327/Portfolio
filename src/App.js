import React, { Component } from 'react';

import './App.css';
import Nav from "./nav/Nav";
import Jumbotron from "./jumbotron/Jumbotron";
import About from "./about-me/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbotron/>
        <About/>
      </div>
    );
  }
}

export default App;
