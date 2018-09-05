import React from "react";
import "./navBar.css";
import Btn from "../btn";
import { Link } from "react-router-dom";

const NavBar = props => (
  <div className="nav">
    <p className="navTitle">Fetch</p>
    <Btn
      onClick={props.handleBtnClick}
      data-value="pass"
    />

    <div className="logOut">{props.Btn}</div>
    <div className="accountUpdate">{props.Btn}</div>
  </div>
);

export default NavBar;
