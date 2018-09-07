import React from "react";
import "./navBar.css";
import Btn from "../btn";
import Gear from "../../images/gear24.png";

const NavBar = props => (
  <div className="nav">
    <h2 className="navTitle">Fetch</h2>
    <div className="navButton1">
    <Btn className="navSearchBtn" label="Search" /> 
    </div>
    <div className="navButton2">
    <Btn className="navLogOutBtn" label="Log Out" />
    </div>
    <div className="navButton3">
    <Btn className="navUpdateBtn" label={<img src={Gear} alt="update" id="updateButton"/>} />
    </div>
  </div>
);

export default NavBar;
