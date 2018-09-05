import React from "react";
import "./logIn.css";
import Btn from "./components/btn";
import FormInput from "./components/formInput";

const LogIn = props => (
<div className="logInPage">
<div className="logInLogo"><img src="" alt="logo"></img></div>
<div className="logInForm">
<FormInput className="emailField">{props.FormInput.email}</FormInput>
<FormInput className="passwordField">{props.FormInput.password}</FormInput>  
</div>
<div className="logInButtons">
<div className="logInButton">{props.Btn}</div>
<div className="signUpLink">{props.Btn}</div>
</div>
</div>
);

export default LogIn;