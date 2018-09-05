import React from "react";
import "./signUp.css";
import Btn from "./components/btn";
import PageLinks from "./components/pageLinks";
import FormInput from "./components/formInput";
import { Link } from "react-router-dom";

const SignUp = props => (
    <div className="signUpPage">
        <div className="SignUpLogo"><img src="/client/public/assets/images/fetch logo.png" alt="logo"></img></div>
        <div className="signUpForm">
            <FormInput className="nameField">{props.FormInput.name}</FormInput>
            <FormInput className="emailField">{props.FormInput.email}</FormInput>
            <FormInput className="passwordField">{props.FormInput.password}</FormInput>
            <FormInput className="petNameField">{props.FormInput.petName}</FormInput>
            <FormInput className="zipCodeField">{props.FormInput.zipCode}</FormInput>
        </div>
        <div className="signUpButtons">
            <Link to='/#profile'><Btn onClick={props.handleFormSubmit}
                type="submit">Submit</Btn>
            </Link>
            <PageLinks onClick={props.logInLink} />
            <Link to='/#logIn'><Btn onClick={props.handleFormCancel}
                type="cancel">Cancel</Btn></Link>
        </div>
    </div>
        );
        
export default SignUp;