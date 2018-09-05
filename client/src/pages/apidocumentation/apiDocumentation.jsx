import React from "react";
import "./api.css";
import { Link } from "react-router-dom";
import ApiFooter from "../../components/footer";
import ApiHeader from "../../components/header";
import ApiNavBar from "../../components/navBar";

class ApiDocumentation extends Component {
    render() {
        return (
            <div className="apiDocuemtationPage">
                <ApiHeader />
                <ApiNavBar />
                <h1 ClassName="documentationTitle">Documentation</h1>
                <div className="apiDocumentationDiv">
                </div>
                <ApiFooter />
            </div>
        )
    }
}

export default ApiDocumentation;