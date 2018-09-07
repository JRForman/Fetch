import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";
import Btn from "../../components/btn";
import Home from "../../images/home24.png";

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
      <h1 className="errorLine1">Ohh...</h1>
      <h1 className="errorLine2">Excuse us.</h1>
      <h1 className="errorLine3">We will get back to work now.</h1>
      <div className="errorHome">
      <Link to='/#main'><Btn className="errorCancelBtn" label={<img src={Home} alt="home button" id="homeButton"/>} /></Link>
    </div>
    </div>
    )
  }
}
export default Error;
