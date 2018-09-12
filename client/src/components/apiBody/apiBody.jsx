import React from "react";
import "./apiBody.css";
import { Link } from "react-router-dom";
import ApiFooter from "../../components/apiFooter";
import ApiHeader from "../../components/apiHeader";
import ApiNavBar from "../../components/apiNavBar";

const ApiBody = (props) => (

   
            <div className="apiBodyPage">
            <div className="apiHeaderDiv">
                <ApiHeader />
                </div>
                <div className="apiNavBarDiv">
                <ApiNavBar />
                </div>
                <div className="apiTitleDiv">
                <h1>{props.label}</h1>
                </div>
                <div className="apiBodyDiv">
                    {props.children}
                </div>
                <div className="apiFooterDiv">
                <ApiFooter />
                </div>
            </div>
        );
 

export default ApiBody;