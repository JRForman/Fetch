import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class LogInBtn extends React.Component {
  render() {
  
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    
      return (
        <Link to="/#profile" ><button onClick={handleClick}>
          <img src="/public/assets/images/fetch.png" alt="tennis ball"></img>
          </button>
          </Link>
      );
    }
  };

export default LogInBtn;