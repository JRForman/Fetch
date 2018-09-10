import React, { Component } from "react";
import "./apiFooter.css";
import { Link } from "react-router-dom";
import Btn from "../btn";
import FormInput from "../formInput";

class ApiFooter extends Component {
    render() {
        return (
            <div className="apiFooter">
                <span class="apiPrivacyStatement"><Link to='/#privacyStatement'>privacy statement</Link></span>
                <Link to='/' className="apiFooterLink">Fetch</Link>
                <p className="apiCopyright"> copyright 2018</p>
                <div className="apiFooterSearch">
                        <FormInput className="apiSearchField" label="Search:" type="text" name="search"/> 
                        <Btn className="apiFooterSearchBtn" label="Search" />
                        </div>
                </div>

          
        )
    }
}

export default ApiFooter;