import React, { Component } from "react";
import "./apiDocumentation.css";
import { Link } from "react-router-dom";
import ApiBody from "../../components/apiBody";

class ApiDocumentation extends Component {
    render() {
        return (
           <ApiBody label="documentation"></ApiBody>
            
        )
    }
}

export default ApiDocumentation;