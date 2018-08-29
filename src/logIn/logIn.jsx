import React from "react";
import "./logIn.css";
import btn from "./components/btn";
import form from "./components/form";

const logIn = props => (
<div className="logInForm">
<div className="emailField">{props.form.email}</div>
<div className="passwordField">{props.form.password}</div>
<div className="logIn">{props.btn}</div>
<div className="signUp">{props.btn}</div>
</div>
);

export default logIn;