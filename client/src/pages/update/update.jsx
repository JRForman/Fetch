import React from "react";
import "./update.css";
import Btn from "./components/btn";
import FormInput from "./components/formInput";

const Update = props => (
<div className="updateForm">
<FormInput className="nameField">{props.FormInput.photo}</FormInput>  
<FormInput className="nameField">{props.FormInput.name}</FormInput>  
<FormInput className="emailField">{props.FormInput.email}</FormInput>
<FormInput className="passwordField">{props.FormInput.password}</FormInput>
<FormInput className="petNameField">{props.FormInput.petName}</FormInput>
<FormInput className="zipCodeField">{props.FormInput.zipCode}</FormInput>
<div className="update">{props.btn}</div>
<div className="cancel">{props.btn}</div>
</div>
);

export default Update;