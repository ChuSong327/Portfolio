import React, { Component } from "react";

import "./jumbotronStyle.css";

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="heading-name">Hello, I am Chu</h1>
                <h2 className="heading-description">I am a Full Stack Developer</h2>
                <button id="button-portfolio">See my Portfolio</button>
            </div>
        )
    }
}

export default Jumbotron;