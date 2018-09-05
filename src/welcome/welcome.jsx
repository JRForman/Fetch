import React, { Component } from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import Btn from "../btn";

class Welcome extends Component {
    state = { label: "Start"}
    render() {
        return (
            <div className="welcomePage">
                <div className="welcomeLogo"><img src={"/public/assets/images/fetch logo.png"} alt="fetch" /></div>
                <h1 className="welcomeMessage">Get Up. Get Out. Together.</h1>
                <div className="welcomeButtonDiv">
                <Link to='/#main'><Btn onClick={this.handleFormSubmit}
                   label = {this.state.label}
                   >
                   </Btn></Link>
                </div> 
            </div>
        )
    }
}

export default Welcome;