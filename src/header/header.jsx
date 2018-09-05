import React from "react";
import "./header.css";
import CollNavBar from "./components/CollNavBar";

const Header = props => (
<div className="header">
<img src="/client/public/assets/images/banner logo.png" alt="logo" className="headerLogo" ></img>
<img src="/client/public/assets/images/fetch.gif" alt="logo" className="headerLogo" ></img>
<div className="navBar">{props.CollNavBar}</div>

</div>
);

export default Header;