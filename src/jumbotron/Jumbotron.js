import React, { Component } from "react";

import "./jumbotronStyle.css";

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="heading-name">Chuchu Song</h1>
                <h2 className="heading-description">A Full Stack Developer in San Francisco Bay Area</h2>
                <div className="button">
                    <a href="#project">
                        <button id="button-portfolio">See my Portfolio</button>
                    </a>
                    <a href="https://res.cloudinary.com/chu327/image/upload/v1533749114/portfolio/Resume_Chuchu_Song.pdf" download target="_blank" rel="noopener noreferrer">
                        <button id="button-portfolio">Download my resume</button>
                    </a>
                </div>
                
            </div>
        )
    }
}

export default Jumbotron;