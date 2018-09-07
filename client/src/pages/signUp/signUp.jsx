import React, { Component } from "react";
import "./signUp.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import Fetch from "../../images/fetchlogo.png";

class SignUp extends Component {
    render() {
      return (
    <div className="signUpPage">
        <div className="signUpLogo"><img src={Fetch} alt="fetch" id="signUpPhoto"/></div>
        <div className="signUpForm">
                <FormInput className="signUpNameField" label="Name:" type="text" name="name"/> 
                <FormInput className="signUpEmailField" label="Email:" type="text" name="email"/> 
                <FormInput className="signUpPasswordField" label="Password:" type="text" name="password"/> 
        </div>
        <div className="signUpButtons">
            <Link to='/#profile'><Btn className="signUpBtn" label="Sign Up" /></Link>
            <Link to='/#logIn'><Btn className="signUpCancelBtn" label="Cancel" /></Link>
            <p className="logInLink">Or log in <Link to={'/#signUp'}>here</Link></p> 
        </div>
    </div>
      )
    }
}
        
export default SignUp;