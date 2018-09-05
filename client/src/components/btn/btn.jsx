import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";


const Btn = (props) => ( 
			<div>
<button onClick={props.onClick}>{props.label} {props.className}</button>
			</div>

);
export default Btn;