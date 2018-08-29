import React from "react";
import "./404.css";
import btn from "./components/btn";

const error = props => (
<div className="404">
<h1>Ohh...</h1>
  <h1>Excuse us.</h1>
  <h2>We will get back to work now.</h2>
  <div className="home"> {props.btn}</div>
  </div>
);

export default error;
