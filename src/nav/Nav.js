import React, { Component } from 'react';
import "./navStyle.css";

class Nav extends Component {

  constructor(){
    super();
    this.state = {
      buttonDisplay: true,
      menuDisplay: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleButtonClick(){
    this.setState({
      buttonDisplay: false,
      menuDisplay: true
    })
  }

  handleMenuClose(){
    this.setState({
      buttonDisplay: true,
      menuDisplay: false,
    })
  }

    render(){
        return(
          <div>
            {this.state.buttonDisplay ? <button id="button-menu" type="button" onClick={ this.handleButtonClick }>
                                          &#9776;
                                        </button>
                                      : null
            }
             
            {this.state.menuDisplay ? <nav className="navbar-side">
                                        <button id="button-close" type="button" onClick={ this.handleMenuClose }>
                                          &times;
                                        </button>
                                        <ul className="navbar-list">
                                          <li className="navbar-list-item">
                                            HOME
                                          </li>
                                          <li className="navbar-list-item">
                                            ABOUT
                                          </li>
                                          <li className="navbar-list-item">
                                            PROJECT
                                          </li>
                                          <li className="navbar-list-item">
                                            TECH STACK
                                          </li>
                                      </ul>
                                      </nav>
                                    : null
              }
          </div>
        )
    }
}

export default Nav;