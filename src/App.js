import React, { Component } from 'react';

import './App.css';
import Nav from "./nav/Nav";
import Jumbotron from "./jumbotron/Jumbotron";
import About from "./about-me/About";
import Project from "./project/Project";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbotron/>
        <About/>
        <Project/>
      </div>
    );
  }
}

export default App;
