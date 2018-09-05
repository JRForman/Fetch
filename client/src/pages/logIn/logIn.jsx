import React, { Component } from "react";
import "./logIn.css";
import LogInBtn from "../../components/btn";
import FormInput from "../../components/formInput";
import PageLinks from "../../components/btn";
import { Link } from "react-router-dom";

class LogIn extends Component {
    render() {
      return (
        <div className="logInPage">
        <div className="logInLogo"><img src="/public/assets/images/fetch logo.png" alt="logo"></img></div>
        <div className="logInForm">
        <FormInput className="emailField">{FormInput.email}</FormInput>
        <FormInput className="passwordField">{FormInput.password}</FormInput>  
        </div>
        <div className="logInButtons">
          <LogInBtn />
          <PageLinks onClick={this.props.signUpLink} />
        </div>
        </div>
      )
    }
  }
export default LogIn;