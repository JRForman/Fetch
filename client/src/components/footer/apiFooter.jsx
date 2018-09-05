import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Btn from "../btn";
import FormInput from "../formInput";

class ApiFooter extends Component {
    render() {
        return (
            <div className="apiFooter">
                <span class="apiPrivacyStatement"><Link to='/#privacyStatement'>privacy statement</Link></span>
                <span class="apiSitemap"><Link to='/#sitemap'>sitemap</Link></span>
                <p className="apiCopyright"> copyright 2018</p>
                <FormInput className="apiSearch">{this.FormInput.search}</FormInput>
                <div className="apiSearchButton">
                    <Btn onClick={this.handleFormSubmit}
                        type="submit">Search</Btn>
                </div>

            </div>
        )
    }
}

export default ApiFooter;