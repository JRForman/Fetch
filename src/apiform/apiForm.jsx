import React from "react";
import "./api.css";
import Btn from "../btn";
import FormInput from "../formInput";
import { Link } from "react-router-dom";
import ApiFooter from "../footer";
import ApiHeader from "../header";
import ApiNavBar from "../navBar";

class ApiForm extends Component {
    render() {
        return (
            <div className="apiFormPage">
               <ApiHeader />
                <ApiNavBar />
                <div className="apiForm">
                    <FormInput className="apiNameField">{this.FormInput.name}</FormInput>
                    <FormInput className="apiEmailField">{this.FormInput.email}</FormInput>
                    <FormInput className="apiPasswordField">{this.FormInput.password}</FormInput>
                    <FormInput className="apiCompanyField">{this.FormInput.company}</FormInput>
                    <FormInput className="apiUsageField">{this.FormInput.usage}</FormInput>
                </div>
                <div className="apiFormButton">
                    <Link to='/#apidocumentation'><Btn onClick={this.handleFormSubmit}
                        type="submit">Submit</Btn>
                    </Link>
                </div>
                <ApiFooter />
            </div>
        )
    }
}

export default ApiForm;