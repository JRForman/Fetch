import React, { Component } from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import Btn from "../../components/btn";
import FetchLogo from "../../images/fetchlogo.png";

class Welcome extends Component {
    render() {
        return (
            <div className="welcomePage">
                <div className="welcomeLogo"><img src={FetchLogo} alt="fetch" id="dogPhoto"/></div>
                <div className="welcomeMessage">
                <h1>Get Up. Get Out. Together.</h1>
                </div>
                <div className="welcomeButtonDiv">
                <Link to='/main'><Btn className="welcomeBtn" label="Enter" /></Link>
                </div>
            </div>
        )
    }
}

export default Welcome;