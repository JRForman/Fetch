import React from "react";
import "./btn.css";
import { Link } from "react-router-dom";


const PageLinks = props => (
<div className="pageLinks">
<p className="logInLink">Or log in <Link to={'/#logIn'}>here</Link></p> 

<p className="signUpLink">Or sign up <Link to={'/#signUp'}>here</Link></p> 
</div>

);

export default PageLinks;