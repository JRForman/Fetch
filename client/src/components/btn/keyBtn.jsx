import React, { Component } from "react";
import "./btn.css";
import { Link } from "react-router-dom";


class KeyBtn extends React.Component {
  render() {
  
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <Link to="/#ApiForm" ><button onClick={handleClick}>
        <img src="/public/assets/images/key.png" alt="key"></img>
        </button>
        </Link>
    );
  }
};

export default KeyBtn;