import React from "react";
import "./api.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import ApiFooter from "../../components/footer";
import ApiHeader from "../../components/header";
import ApiNavBar from "../../components/navBar";

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