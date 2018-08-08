import React, { Component } from "react";
import "./projectStyle.css"

class Project extends Component {
    render(){
        return(
            <div className="project">
                <h2 className="project-title">My Project</h2>
                <div className="project-list">
                    <div className="project-item">
                        <a href="https://viovo.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533709402/VioVo/v.png" alt="Viovo"/>
                        </a>
                        <br/>
                        <a className="project-link" href="https://viovo.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <h4 className="project-name">VioVo</h4>
                        </a>
                    </div>
                    <div className="project-item">
                        <a  href="https://chattersquare.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <img className="project-image chattersquare" src="https://res.cloudinary.com/chu327/image/upload/v1533709427/ChatterBox-UserProfilePics/G.png" alt="ChatterSqaure"/>
                        </a>
                        <br/>
                        <a className="project-link" href="https://chattersquare.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <h4 className="project-name">ChatterSquare</h4>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533710804/Nunu%20Nails/Screen_Shot_2018-08-07_at_11.45.54_PM.png" alt="Nunu Nails"/>
                        </a>
                        <br/>
                        <a className="project-link" href="/">
                            <h4 className="project-name">Nunu Nails</h4>
                        </a>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Project;