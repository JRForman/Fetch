import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class ResultsAddBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <button onClick={handleClick}>
        <img src="/public/assets/images/star24.png" alt="favorite button"></img>
        </button>
    );
  }
};


export default ResultsAddBtn;