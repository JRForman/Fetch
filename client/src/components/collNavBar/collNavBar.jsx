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
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState({menuVisible: !this.state.menuVisible});
}
render() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="topbar">
          <a className={"menu"+" "+this.state.menuVisible} onClick={this.handleClick}><i className="zmdi zmdi-menu"></i></a>
        </div>
        <div className={"menubar"+" "+this.state.menuVisible}>
          <ul onClick={this.handleClick}>
            <li>  <Link to='/profile'><Btn className="collNavUpdateBtn" label={<img src={Home} alt="home" id="homeButton" />} onClick={this.handleClick}/>
              </Link>
            </li>
            <li><Link to='/logIn'><Btn className="collNavLogOutBtn" label="Log Out" onClick={this.handleClick}/>
              </Link>
            </li>
            <li><Link to='/update'><Btn className="collNavUpdateBtn" label={<img src={Update} alt="update" id="updateButton" />} onClick={this.handleClick}/>
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
