import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import "./footer.css";
import ADJ from "../../images/ADJ Designs.png";

class Footer extends Component {
        render() {
                return (
                        <div className="footer">
                        <div className="footerLogo">
                                <img src={ADJ} alt="ADJ Designs" id="companyLogo"/>
                                </div>
                                <div classname="footerCenter">
                                <Link to='/apiWelcome' className="footerLink">Fetch Developer Portal</Link>
                        <p className="footerCopyright">&copy; 2018</p>
                        </div>
                        <div className="footerSearch">
                        <FormInput className="searchField" label="Search:" type="text" name="search"/> 
                        <Btn className="footerSearchBtn" label="Search" />
                        </div>
                        </div>
                )
        }
}

export default Footer;