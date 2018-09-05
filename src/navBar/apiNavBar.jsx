import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import UpdateBtn from "../btn";

class ApiNavBar extends Component {
    render() {
        return (
            <div className="apiNavBar">
                <h3 className="apiDashboardNav">Dashboard</h3>
                <h3 className="apiDocumentationNav">Documentation</h3>
                <h3 className="apiSupportNav">Support</h3>
                <div className="apiUpdateButton">
                    <UpdateBtn />
                </div>
            </div>
        )
    }
}

export default ApiNavBar;