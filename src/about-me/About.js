import React, { Component } from "react";
import "./aboutStyle.css";

class About extends Component {
    render(){
        return(
            <div className="about" id="about">
                <img className="about-image" src="https://res.cloudinary.com/chu327/image/upload/v1533689080/portfolio/20170423_105639_HDR.jpg" alt="profile"/>
                <div className="about-info">
                    <h3 className="about-title">About Me</h3>
                    <p className="about-description">
                        I immigrated to the United States in 2012 and started my higher education at UC Davis with a major in Managerial Economics. 
                        The four-year immersion in the business education has very well developed my business acumen and abilities in 
                        marketing, finance, and operation. 
                        I have interned at State Street Corporation and Adobe Systems as a financial analyst. 
                        The business background enables me to observe and think from perspectives of both the client and the organization.
                        <br/>
                        <br/>
                        Now, I have transitioned to be a full stack developer.
                        My interest in programming originated from my past e-commerce fashion business plan.
                        Even though due to many constraints, the business didn't get started, 
                        I did find myself interested in website development during the process.
                        I like this new role and expect further and sustaining growth in this new role. 
                    </p>
                </div>
            </div>
        )
    }
}

export default About;