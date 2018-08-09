import React, { Component } from 'react';

import './App.css';
import Nav from "./nav/Nav";
import Jumbotron from "./jumbotron/Jumbotron";
import About from "./about-me/About";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Skills from "./skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbotron/>
        <About/>
        <Education/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    );
  }
}

export default App;
