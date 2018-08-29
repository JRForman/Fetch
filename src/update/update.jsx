import React from "react";
import "./update.css";
import btn from "./components/btn";
import form from "./components/form";

const update = props => (
<div className="updateForm">
<div className="nameField">{props.form.name}</div>  
<div className="emailField">{props.form.email}</div>
<div className="passwordField">{props.form.password}</div>
<div className="petNameField">{props.form.petName}</div>
<div className="zipCodeField">{props.form.zipCode}</div>
<div className="update">{props.btn}</div>
<div className="cancel">{props.btn}</div>
</div>
);

export default update;