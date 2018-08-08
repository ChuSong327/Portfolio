import React, { Component } from "react";
import "./projectStyle.css"

class Project extends Component {
    render(){
        return(
            <div className="project">
                <h2 className="project-title">My Project</h2>
                <div className="project-list">
                    <div className="project-item">
                        <a className="project-link" href="https://viovo.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533709402/VioVo/v.png" alt="Viovo"/>
                            <br/>
                            <h4 className="project-name">VioVo</h4>
                            <div className="overlay">
                                <p className="overlay-text">
                                    A single-page front-end app that streams real-time most popular trending videos on YouTube and enables users to search and play selected videos  
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="project-item">
                        <a  className="project-link" href="https://chattersquare.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533709427/ChatterBox-UserProfilePics/G.png" alt="ChatterSqaure"/>
                            <br/>
                            <h4 className="project-name">ChatterSquare</h4>
                            <div className="overlay">
                                <p className="overlay-text">
                                A full-stack project that provides an online chatting platform to allow users to converse and befriend with other users in selected chat rooms 
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="project-item">
                        <a className="project-link" href="https://github.com/ChuSong327/NunuNails-2.0" target="_blank" rel="noopener noreferrer">
                            <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533710804/Nunu%20Nails/Screen_Shot_2018-08-07_at_11.45.54_PM.png" alt="Nunu Nails"/>
                            <br/>
                            <h4 className="project-name">Nunu Nails</h4>
                            <div className="overlay">
                                <p className="overlay-text">
                                    A full-stack project
                                </p>
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Project;