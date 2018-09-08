import React, { Component } from "react";
import "./apiNavBar.css";
import { Link } from "react-router-dom";
import Btn from "../btn";
import Gear from "../../images/apigear24.png";

class ApiNavBar extends Component {
    render() {
        return (
            <div className="apiNavBar">
                <h3 className="apiDashboardNav">Dashboard</h3>
                <h3 className="apiDocumentationNav">Documentation</h3>
                {/* div for docs hide and show with on click with validation css animation slide */}
                <h3 className="apiSupportNav">Support</h3>
                <div className="apiUpdateButton">
                <Link to='/#apiForm'><Btn className="apiUpdateBtn" label={<img src={Gear} alt="update" id="apiUpdateButton"/>} /></Link>
                </div>
            </div>
        )
    }
}

export default ApiNavBar;