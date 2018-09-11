import React, { Component } from "react";
import "./collNavBar.css";
import Btn from "../btn";
import { Link } from "react-router-dom";
import Update from "../../images/gear24.png";
import Home from "../../images/home24.png";

class CollNavBar extends Component {

  constructor() {
    super();
    this.state = {
      menuVisible: false
      // .hide(menubar)
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  
  handleClick() {
    this.setState({ menuVisible: !this.state.menuVisible });
    this.setState({
      condition: !this.state.condition
    });
 
  }
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="topbar">
          </div>
          <div className={"menubar" + " " + this.state.menuVisible} className="hide" className="show" className= { this.state.condition ? "button toggled" : "button" } className="burger-check" id="burger-check" type="checkbox"><label for="burger-check" className="burger"></label>
            <ul onClick={this.handleClick}>
              <li>  <Link to='/profile'><Btn className="collNavHomeBtn" label={<img src={Home} alt="home" id="homeButton" />} onClick={this.handleClick} />
              </Link>
              </li>
              <li><Link to='/signUp'><Btn className="collNavSignUpBtn" label="Sign Up" onClick={this.handleClick} />
              </Link>
              </li>
              <li><Link to='/logIn'><Btn className="collNavLogOutBtn" label="Log In/Out" onClick={this.handleClick} />
              </Link>
              </li>
              <li><Link to='/update'><Btn className="collNavUpdateBtn" label={<img src={Update} alt="update" id="updateButton" />} onClick={this.handleClick} />
              </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CollNavBar;
