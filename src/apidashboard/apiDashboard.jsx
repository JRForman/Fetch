import React from "react";
import "./api.css";
import { Link } from "react-router-dom";
import ApiFooter from "../footer";
import ApiHeader from "../header";
import ApiNavBar from "../navBar";

class ApiDashboard extends Component {
    render() {
        return (
            <div className="apiDashboardPage">
                <ApiHeader />
                <ApiNavBar />
                <h1 ClassName="dashboardTitle">Dashboard</h1>
                <div className="apiUserInfo">
                      <h5 className="apiLine1">Name:{this.name}</h5> 
                      <h5 className="apiLine2">Email:{this.email}</h5>
                      <h5 className="apiLine3">Password:{this.password}</h5>
                      <h5 className="apiLine4">Company:{this.company}</h5>
                      <h5 className="apiLine5">Usage:{this.usage}</h5>
              </div>
              <div className="apiKeyDiv">
                </div>
                <ApiFooter />
            </div>
        )
    }
}

export default ApiDashboard;