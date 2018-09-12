import React, { Component } from "react";
import "./apiWelcome.css";
import Btn from "../../components/btn";
import { Link } from "react-router-dom";


class ApiWelcome extends Component {
    render() {
      return (
<div className="apiWelcomePage">
<div className="welcomeTitleDiv">
<h1>Fetch Developer Portal</h1>
</div>
<div className="apiWelcomeButton">
<Link to='/apiDocumentation'><Btn className="apiWelcomeBtn" label="Enter" /></Link>
</div>
</div>

)
    }
}

export default ApiWelcome;