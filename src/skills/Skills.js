import React, { Component } from "react";

import "./skillStyle.css";

class Skills extends Component {
    render(){
        return(
           <div className="skills">
                <h3 className="skills-title">
                    My Skills
                </h3>
                <div className="skills-list">
                    <i className="skills-item devicon-javascript-plain colored"></i>
                    <i className="skills-item devicon-nodejs-plain colored"></i>
                    <img className="skills-image" src="https://res.cloudinary.com/chu327/image/upload/v1533758068/portfolio/angular.png" alt="Angular"/>
                    <i className="skills-item devicon-html5-plain colored"></i>
                    <i className="skills-item devicon-css3-plain colored"></i>
                    <i className="skills-item devicon-sass-original colored"></i>
                    <i className="skills-item devicon-react-original colored"></i>
                    <i className="skills-item devicon-bootstrap-plain colored"></i>
                    <img className="skills-image" src="https://res.cloudinary.com/chu327/image/upload/v1533758783/portfolio/mui.png" alt="mui"/>
                    <i className="skills-item devicon-mysql-plain-wordmark colored"></i>
                    <i className="skills-item devicon-postgresql-plain colored"></i>
                    <i className="skills-item devicon-mongodb-plain-wordmark colored"></i>
                    <i className="skills-item devicon-heroku-original colored"></i>
                </div>
            </div>
        )
    }
}

export default Skills;