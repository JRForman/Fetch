import React from "react";
import "./navBar.css";
import Btn from "./components/btn";
import { Link } from "react-router-dom";

const ColNavBar = props => (
  <div className="colNavBar">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  <span class="sr-only">Toggle navigation</span>
  <span class="icon-bar top-bar"> <div className="navTitle">Fetch</div></span>
  <span class="icon-bar middle-bar"><Link to='/#profile'>Home</Link></span>
  <span class="icon-bar middle-bar"><Link to='/#main'>Search</Link></span>
  <span class="icon-bar bottom-bar"><Link to={'/#logIn'}>Log Out</Link></span>
</button>
  </div>
);

export default ColNavBar;