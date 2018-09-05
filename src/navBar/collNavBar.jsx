import React, { Component } from "react";
import "./navBar.css";
import Btn from "../btn";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
  <div className="nav">
    <p className="navTitle">Fetch</p>
    
    <Link to='/#profile'><Btn onClick={this.handleFormSubmit}
      type="submit">Home</Btn>
    </Link>

    <Link to='/#logIn'><Btn onClick={this.handleFormSubmit}
      type="submit">Log Out</Btn>
    </Link>

    <Link to='/#update'><Btn onClick={this.handleFormSubmit}
      type="submit">Update Profile</Btn>
    </Link>
  </div>
)
  }
}

export default NavBar;
