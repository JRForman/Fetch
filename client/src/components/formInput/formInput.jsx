import React from "react";

const FormInput = (props) => (
	
  <div className={props.className}>
    <label htmlFor={props.className}>{props.label}</label>
    <input onChange={props.change} id={props.className} className={props.className} type={props.type} name={props.name} />
  </div>

);

export default FormInput;