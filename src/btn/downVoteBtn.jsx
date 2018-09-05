import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class DownVoteBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <button onClick={handleClick}>
        <img src="/public/assets/images/downarrow24.png" alt="down arrow"></img>
        </button>
    );
  }
};


export default DownVoteBtn;