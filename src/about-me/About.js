import React, { Component } from "react";
import "./aboutStyle.css";

class About extends Component {
    render(){
        return(
            <div className="about">
                <img className="about-image" src="https://res.cloudinary.com/chu327/image/upload/v1533689080/portfolio/20170423_105639_HDR.jpg"/>
                <div className="about-info">
                    <h3 className="about-title">About Me</h3>
                    <p className="about-description">
                        Lorem ipsum daolor sit amet, consectetur adipiscing elit. Phasellus ultrices, nulla et egestas venenatis, urna ante tincidunt erat, vitae lacinia ante urna dignissim purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam diam purus, facilisis eu placerat vel, egestas vel massa. Phasellus pharetra urna at sem convallis bibendum. Fusce sed leo quis purus luctus tempus. Ut ornare mattis justo.
                        <br/>
                        <br/>
                        Pellentesque lectus libero, lobortis sed quam in, congue elementum tellus. Vestibulum dui enim, aliquet in tellus id, luctus tristique velit. Mauris augue sapien, condimentum sed ligula sit amet, facilisis aliquet nulla. Donec sed congue tellus, quis efficitur nisl. Maecenas at sapien orci. Donec dapibus pellentesque orci, nec egestas sapien ultricies eu. Morbi eu sem commodo, pellentesque massa quis.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;