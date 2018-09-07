import React, { Component } from "react";
import "./update.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

class Update extends Component {
    render() {
        return (
            <div className="updatePage">
            <div className="updateNavBar"><NavBar /></div>
            <div className="photoDiv">
                <FormInput className="photoField" label="Photo:" type="file" name="photo"/> 
                <Btn className="uploadBtn" label="Upload" />
                </div>
                <FormInput className="nameField" label="Name:" type="text" name="name"/> 
                <FormInput className="emailField" label="Email:" type="text" name="email"/> 
                <FormInput className="passwordField" label="Password:" type="text" name="password"/> 
                <FormInput className="petNameField" label="Pet Name(s):" type="text" name="petName"/> 
                <FormInput className="zipCodeField" label="Zip Code:" type="text" name="zipCode"/> 
                <div className="updateButtons">
                <Btn className="submitBtn" label="Submit" />
                <Btn className="cancelBtn" label="Cancel" />
                </div>
                <div className="updateFooter"> <Footer/></div>  
            </div>
        )
    }
}

export default Update;