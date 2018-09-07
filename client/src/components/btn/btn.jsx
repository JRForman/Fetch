import React from "react";
import "./btn.css";

const Btn = (props) => (
	<button className={props.className}>{props.label}</button>
);
export default Btn;