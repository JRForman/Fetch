import React from "react";

const FormInput = (props) => (
	<form className={props.className}>
 {props.label}
  
    <input type={props.type} name={props.name} />
</form>
);

export default FormInput;