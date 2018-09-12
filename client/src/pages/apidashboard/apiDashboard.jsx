import React, { Component } from "react";
import "./apiDashboard.css";
import { Link } from "react-router-dom";
import ApiBody from "../../components/apiBody";
import ApiCard from "../../components/apiCard";

class ApiDashboard extends Component {
    render() {
        return (
            <ApiBody label="Dashboard">
            <div className="apiUserInfo">
                 <h3 className="apiLine1">Name:{this.name}</h3> 
                 <h3 className="apiLine2">Email:{this.email}</h3>
                 <h3 className="apiLine3">Password:{this.password}</h3>
                 <h3 className="apiLine4">Company:{this.company}</h3>
                 {/* <h3 className="apiLine5">Usage:{this.usage}</h3> */}
            </div>
            <div className="apiCard">
                 <apiCard>
                 <p className="projectName">Project Name:{this.usage}</p>
                 <p className="apiKey">API Key:{this.key}</p>
                  </apiCard>
                 </div>
            </ApiBody>
        )
    }
}

export default ApiDashboard;