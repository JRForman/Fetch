import React, { Component } from "react";
import "./apiDocuments.css";
import { Link } from "react-router-dom";

class ApiDocuments extends Component {
    render() {
        return (
            <div className="apiDocumentsDiv">
                <div className="getListOfSitesDoc">
                    <p>Parameters</p>
                    <p>Name</p>	<p>Description</p>
                    <p>zip
                    integer
                    (query)</p>
                    <p>search based on zip code for site</p>
                    <p>paws
                    integer
                    (query)</p>
                    <p>search based on review score</p>
                    <p>typeOf
                    string
                    (query)</p>
                    <p>search based on type of site</p>
                    <p>city
                    string
                    (query)</p>
                    <p>search based on city of site</p>
                    <p>Responses</p>
                </div>
                <div className="addCommentsDoc"></div>
                <p>Parameters</p>
                <p>Name</p>	<p>Description</p>
                <p>comment *required</p>
                <p>Add user review in comments to site</p>
                <p>Responses</p>
                <div className="deleteCommentsDoc"></div>
                <p>Parameters</p>
                <p>Name</p>	<p>Description</p>
                <p>comment *required</p>
                <p>Delete user comments from site</p>
                <p>Responses</p>
                <div className="addPawsDoc"></div>
                <p>Parameters</p>
                <p>Name</p>	<p>Description</p>
                <p>site *required</p>
                <p>Add user review in paws to site</p>
                <p>Responses</p>
                <div className="takePawsDoc"></div>
                <p>Parameters</p>
                <p>Name</p>	<p>Description</p>
                <p>site *required</p>
                <p>Take user review in paws to site</p>
                <p>Responses</p>
            </div>
        )
    }
}

export default ApiDocuments;