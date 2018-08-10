import React, { Component } from "react";

import "./educationStyle.css";

class Education extends Component {
    render(){
        return(
            <div className="experience" id="education">
                <div className="experience-education">
                    <h3 className="education-title">Education</h3>
                    <div className="education-section">
                        <div className="education-list">
                            <div className="education-heading">
                                <img className="education-image" src="https://res.cloudinary.com/chu327/image/upload/v1533765352/portfolio/ucdavis.png" alt="ucdavis"/>
                                <h4 className="education-name">university of california, davis</h4>
                            </div>
                            <h5 className="education-degree">B.S in Managerial Economics | 2016 </h5>
                        </div>
                        <div className="education-list">
                            <div className="education-heading">
                                <img className="education-image" src="https://res.cloudinary.com/chu327/image/upload/v1533767749/portfolio/hrhq-avatar.png" alt="hr"/>
                                <h4 className="education-name">hack reactor</h4>
                            </div>
                            <h5 className="education-degree">Full Stack Web Development | 2018 </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;