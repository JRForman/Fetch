import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
<div className="footer">
<img src={"/public/assets/images/ADJ Designs.png"} alt="ADJ Designs" className="companyLogo"/>
</div>
        )
        }
}

export default Footer;