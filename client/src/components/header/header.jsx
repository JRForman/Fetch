import React, { Component } from "react";
import "./header.css";
import CollNavBar from "../collNavBar";
import BannerLogo from "../../images/bannerlogo.png";
import BannerGif from "../../images/fetch.gif";

class Header extends Component {
    render() {
      return (
<div className="headerPage">
<div className="bannerLogo"><img src={BannerLogo} alt="fetch" id="headerDogPhoto"/></div>
<div className="bannerGif"><img src={BannerGif} alt="tennis ball" id="headerGif"/></div>
<div className="headerNavBar"><CollNavBar /></div>

</div>
)
    }
}

export default Header;