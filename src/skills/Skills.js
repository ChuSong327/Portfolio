import React, { Component } from "react";

import "./skillStyle.css";

class Skills extends Component {
    render(){
        return(
           <div className="skills" id="skills">
                <h3 className="skills-title">
                    My Skills
                </h3>
                <div className="skills-list">
                    <i className="skills-item devicon-javascript-plain colored"></i>
                    <i className="skills-item devicon-typescript-plain colored"></i>
                    <i className="skills-item devicon-nodejs-plain colored"></i>
                    <i className="skills-item devicon-express-original colored"></i>
                    <i className="skills-item devicon-react-original-wordmark colored"></i>
                    <img className="skills-image" src="https://res.cloudinary.com/chu327/image/upload/v1534085991/portfolio/angular_1.png" alt="mui"/>
                    <i className="skills-item devicon-html5-plain-wordmark colored"></i>
                    <i className="skills-item devicon-css3-plain-wordmark colored"></i>
                    <i className="skills-item devicon-sass-original colored"></i>
                    <i className="skills-item devicon-bootstrap-plain-wordmark colored"></i>
                    <img className="skills-image" src="https://res.cloudinary.com/chu327/image/upload/v1534085925/portfolio/brand.png" alt="mui"/>
                    <i className="skills-item devicon-jquery-plain-wordmark colored"></i>
                    <i className="skills-item devicon-mysql-plain-wordmark colored"></i>
                    <i className="skills-item devicon-postgresql-plain-wordmark colored"></i>
                    <i className="skills-item devicon-mongodb-plain-wordmark colored"></i>
                    <i className="skills-item devicon-heroku-plain-wordmark colored"></i>
                    <i className="skills-item devicon-github-plain colored"></i>
                    <i className="skills-item devicon-amazonwebservices-plain-wordmark colored"></i>
                </div>
            </div>
        )
    }
}

export default Skills;