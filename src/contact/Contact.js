import React, { Component } from "react";

import "./contactStyle.css";

class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <h2 className="contact-title">Contact Me</h2>
                <div className="contact-info">
                    <div className="contact-social">
                        <a href="https://www.linkedin.com/in/chuchusong/" target="_blank" rel="noopener noreferrer">
                            <i className="contact-linkedIn fab fa-linkedin-in"></i>
                        </a>
                        <a className="contact-link" href="https://github.com/ChuSong327" target="_blank" rel="noopener noreferrer">
                            <i className="contact-image devicon-github-plain"></i>
                        </a>
                    </div>
                    <div className="contact-detail">
                        <table className="contact-table">
                            <tbody>
                                <tr>
                                    <th className="contact-detail">
                                        Email:
                                    </th>
                                    <td className="contact-detail">
                                        chuchusong23@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <th className="contact-detail">
                                        Phone:
                                    </th>
                                    <td className="contact-detail">
                                        (760) 989 - 3044
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="contact-resume">
                        <a href="https://res.cloudinary.com/chu327/image/upload/v1533749114/portfolio/Resume_Chuchu_Song.pdf" download target="_blank" rel="noopener noreferrer">
                            <button className="contact-button">Download My Resume</button>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;