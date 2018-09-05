import React, { Component } from "react";
import "./header.css";
import CollNavBar from "../navBar";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
      return (
<div className="header">
<img src="/public/assets/images/banner logo.png" alt="logo" className="headerLogo" ></img>
<img src="/public/assets/images/fetch.gif" alt="logo" className="headerLogo" ></img>
<div className="navBar"><CollNavBar /></div>

</div>
)
    }
}

export default Header;