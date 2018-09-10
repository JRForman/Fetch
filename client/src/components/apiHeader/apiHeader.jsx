import React, { Component } from "react";
import "./apiHeader.css";
import { Link } from "react-router-dom";
import Key from "../../images/key.png";
import CompanyApiLogo from "../../images/ADJ Designs.png";
import FetchApiLogo from "../../images/fetchlogo.png";

class ApiHeader extends Component {
    render() {
        return (
            <div className="apiHeader">
                <img src={CompanyApiLogo} alt="ADJ Designs" className="apiCompanyLogo" />
                <img src={FetchApiLogo} alt="fetch" className="apiBrandLogo" />
                <div className="apiFormButton">
                    <p className="keyRequest">Get a <Link to={'/#apiForm'}><img src={Key} alt="fetch Key" id="Key" /></Link></p>
                </div>
            </div>
        )
    }
}

export default ApiHeader;