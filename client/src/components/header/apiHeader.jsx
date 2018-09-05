import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class ApiHeader extends Component {
    render() {
        return (
            <div className="apiHeader">
        <img src={"/public/assets/images/ADJ Designs.png"} alt="ADJ Designs" className="apiCompanyLogo"/>
        <img src={"/public/assets/images/fetch logo.png"} alt="fetch" className="apiBrandLogo"/>
        <div className="apiFormButton">
                    <Link to='/#apiform'><Btn onClick={this.handleFormSubmit}
                        type="submit">Get a <img src={"/public/assets/images/key.png"} alt="key Button" className="keyBtn"/></Btn>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ApiHeader;