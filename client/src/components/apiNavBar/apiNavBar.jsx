import React, { Component } from "react";
import "./apiNavBar.css";
import { Link } from "react-router-dom";
import Btn from "../btn";
import Gear from "../../images/apigear24.png";

class ApiNavBar extends Component {
    render() {
        return (
            <div className="apiNavBar">
           
           
                <h3 className="apiDashboardNav"><Link to='/apiDashboard'>Dashboard</Link></h3>
                <h3 className="apiDocumentationNav"><Link to='/apiDashboard'>Documentation</Link></h3>
                {/* div for docs hide and show with on click with validation css animation slide */}
                <div className="docList">
                <ul>
                    <li><p>Get List of Sites</p></li>
                    <li><p>Add Comments</p></li>
                    <li><p>Delete Comments</p></li>
                    <li><p>Add Paws</p></li>
                    <li><p>Take Paws</p></li>
                </ul>
                </div>
                <h3 className="apiSupportNav"><Link to='/apiDashboard'>Support</Link></h3>
                <div className="apiUpdateButton">
                <Link to='/#apiForm'><Btn className="apiUpdateBtn" label={<img src={Gear} alt="update" id="apiUpdateButton"/>} /></Link>
                </div>
            </div>
        )
    }
}

export default ApiNavBar;