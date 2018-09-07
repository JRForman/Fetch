import React from "react";
import { Link } from "react-router-dom";
import "./logIn.css";
import LogInBtn from "../../components/btn";
import FormInput from "../../components/formInput";
import Btn from "../../components/btn";
import Ball from "../../images/fetch.png";
import Fetch from "../../images/fetchlogo.png";

const LogIn = (props) => ( 
        <div className="logInPage">
        <div className="logInLogo"><img src={Fetch} alt="fetch" id="logoPhoto"/></div>
        <div className="logInForm">
                <FormInput className="logInEmailField" label="Email:" type="text" name="email"/> 
                <FormInput className="logInPasswordField" label="Password:" type="text" name="password"/> 
        </div>
        <div className="logInButtons">
        <Btn className="logInBtn" label={<img src={Ball} alt="update" id="updateButton"/>} />
        <p className="signUpLink">Or sign up <Link to={'/#signUp'}>here</Link></p> 
        </div>
        </div>
      );

export default LogIn;