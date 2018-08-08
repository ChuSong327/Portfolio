import React, { Component } from "react";
import "./projectStyle.css"

class Project extends Component {
    render(){
        return(
            <div className="project">
                <h2 className="project-title">My Project</h2>
                <ul className="project-list">
                    <li className="project-item">
                        <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533709402/VioVo/v.png" alt=""/>
                        <br/><h4 className="project-name">VioVo</h4>
                    </li>
                    <li className="project-item">
                        <img className="project-image chattersquare" src="https://res.cloudinary.com/chu327/image/upload/v1533709427/ChatterBox-UserProfilePics/G.png" alt=""/>
                        <br/><h4 className="project-name">ChatterSquare</h4>
                    </li>
                    <li className="project-item">
                        <img className="project-image" src="https://res.cloudinary.com/chu327/image/upload/v1533710804/Nunu%20Nails/Screen_Shot_2018-08-07_at_11.45.54_PM.png" alt=""/>
                        <br/><h4 className="project-name">Nunu Nails</h4>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Project;