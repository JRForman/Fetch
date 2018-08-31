import React from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class LogInBtn extends React.Component {
  render() {
      const { 
        variant,
        content,
        ...others
      } = this.props;
      
      return (
        <Link to='/#logIn'>
        <button className={variant} {...others}>
          {content} ={{ img: `url("/public/assets/images/fetch.png")` }}
        </button>
        </Link>
      )
    }
  };

export default LogInBtn;