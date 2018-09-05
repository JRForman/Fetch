import React from "react";
import "./apiContact.css";
import { Link } from "react-router-dom";
import ApiFooter from "../footer";
import ApiHeader from "../header";
import ApiNavBar from "../navBar";

class ApiContact extends Component {
    render() {
        return (
            <div className="apiContactPage">
                <ApiHeader />
                <ApiNavBar />
                <h1 ClassName="documentationTitle">Contact Us</h1>
                <div className="apiForm">
                    <FormInput className="apiContactNameField">{this.FormInput.name}</FormInput>
                    <FormInput className="apiContactEmailField">{this.FormInput.email}</FormInput>
                    <FormInput className="apiContactCommentField">{this.FormInput.comment}</FormInput>
                </div>
                <ApiFooter />
            </div>
        )
    }
}

export default ApiContact;