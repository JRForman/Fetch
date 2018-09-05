import React, { Component } from "react";
import "./404.css";
import HomeBtn from "../../components/btn";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
      <h1 className="errorLine1">Ohh...</h1>
      <h1 className="errorLine2">Excuse us.</h1>
      <h1 className="errorLine3">We will get back to work now.</h1>
      <div className="errorHome">
             <HomeBtn />
    </div>
    </div>
    )
  }
}
export default Error;
