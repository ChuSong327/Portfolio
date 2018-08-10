import React, { Component } from "react";

import "./footerStyle.css";

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <p className="footer-copyright">&copy; Chuchu Song</p>
                <p className="footer-location">Santa Clara, CA</p>
            </div>
        )
    }
}

export default Footer;