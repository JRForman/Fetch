import React, { Component } from "react";
import "./signUp.css";
import Btn from "../btn";
import PageLinks from "../btn";
import FormInput from "../formInput";
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
      return (
    <div className="signUpPage">
        <div className="SignUpLogo"><img src="/public/assets/images/fetch logo.png" alt="logo"></img></div>
        <div className="signUpForm">
            <FormInput className="nameField">{this.FormInput.name}</FormInput>
            <FormInput className="emailField">{this.FormInput.email}</FormInput>
            <FormInput className="passwordField">{this.FormInput.password}</FormInput>
            <FormInput className="petNameField">{this.FormInput.petName}</FormInput>
            <FormInput className="zipCodeField">{this.FormInput.zipCode}</FormInput>
        </div>
        <div className="signUpButtons">
            <Link to='/#profile'><Btn onClick={this.handleFormSubmit}
                type="submit">Submit</Btn>
            </Link>
            <PageLinks onClick={this.logInLink} />
            <Link to='/#logIn'><Btn onClick={this.handleFormCancel}
                type="submit">Cancel</Btn></Link>
        </div>
    </div>
      )
    }
}
        
export default SignUp;