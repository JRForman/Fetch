import React from "react";
import "./btn.css";
import { Link } from "react-router-dom";


class HomeBtn extends React.Component {
  render() {
      const { 
        variant,
        content,
        ...others
      } = this.props;
      
      return (
        <Link to='/#profile'>
        <button className={variant} {...others}>
          {content} ={{ img: `url("/public/client/public/assets/images/home24.png")` }}
        </button>
        </Link> 
      )
    }
  };

export default HomeBtn;