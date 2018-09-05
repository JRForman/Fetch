import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class UpVoteBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <button onClick={handleClick}>
        <img src="/public/assets/images/uparrow24.png" alt="up arrow"></img>
        </button>
    );
  }
};

export default UpVoteBtn;