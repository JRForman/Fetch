import React, { Component } from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/btn";
import "./header.css";
import CollNavBar from "../collNavBar";
import FormInput from "../formInput";
import BannerLogo from "../../images/bannerlogo.png";
import BannerGif from "../../images/fetch.gif";

class Header extends Component {
    render() {
      return (
<div className="headerPage">
<div className="bannerLogo"><img src={BannerLogo} alt="fetch" id="headerDogPhoto"/></div>
<div className="bannerGif"><img src={BannerGif} alt="tennis ball" id="headerGif"/></div>
<div className="headerZipDiv">
<div className="headerZipField">
<FormInput className="zipField" label="Zip Code Search:" type="text" name="search"/> 
                        </div>
                        <div className="headerZipButton">
                        <Btn className="headerZipBtn" label="Search" />
</div>
</div>
<div className="headerNavBar"><CollNavBar /></div>

</div>
)
    }
}

export default Header;