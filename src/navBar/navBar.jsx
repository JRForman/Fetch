import React from "react";
import "./navBar.css";
import btn from "./components/btn";

const navBar = props => (
  <div className="nav">
    <p className="navTitle">Fetch</p>
    <div className="search"> {props.btn}</div>
    <div className="logOut">{props.btn}</div>
    <div className="accountUpdate">{props.btn}</div>
  </div>
);

export default navBar;
