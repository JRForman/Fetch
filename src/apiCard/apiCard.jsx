import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./apiCard.css";

const ApiCard = props => (
    <div className="card mt-4">
      <div className="card-body">{props.children}</div>
    </div>
  );
  
  export default ApiCard;