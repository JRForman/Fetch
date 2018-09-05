import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";


class ApiUpdateBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <Link to="/#apidashboard" ><button onClick={handleClick}>
        <img src="/public/assets/images/gear24.png" alt="home"></img>
        </button>
        </Link>
    );
  }
};

export default ApiUpdateBtn;