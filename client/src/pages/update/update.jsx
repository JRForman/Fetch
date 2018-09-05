import React, { Component } from "react";
import "./update.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";

class Update extends Component {
    state = {
        label: "Update",
        label: "Cancel"}
    render() {
        return (
            <div className="updateForm">
                <FormInput className="photoField">{this.FormInput.photo}</FormInput>
                <FormInput className="nameField">{this.FormInput.name}</FormInput>
                <FormInput className="emailField">{this.FormInput.email}</FormInput>
                <FormInput className="passwordField">{this.FormInput.password}</FormInput>
                <FormInput className="petNameField">{this.FormInput.petName}</FormInput>
                <FormInput className="zipCodeField">{this.FormInput.zipCode}</FormInput>
                <div className="updateBtns">
                    <Link to='/#profile'><Btn onClick={this.handleFormSubmit}
                        label={this.state.label.Update}>
                    </Btn></Link>
                    <Link to='/#profile'><Btn onClick={this.handleFormSubmit}
                        label={this.state.label.Cancel}>
                        </Btn></Link>
                </div>
            </div>
                    )
                        }
                    }
                    
export default Update;