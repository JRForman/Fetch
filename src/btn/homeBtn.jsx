import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";


class HomeBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <Link to="/#main" ><button onClick={handleClick}>
        <img src="/public/assets/images/home24.png" alt="home"></img>
        </button>
        </Link>
    );
  }
};

export default HomeBtn;