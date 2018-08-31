import React from "react";
import "./btn.css";
import { Link } from "react-router-dom";

class Btn extends React.Component {

  render() {
    const { 
      variant,
      content,
      ...others
    } = this.props;
    
    return (
      <button className={variant} {...others}>
        {content}
      </button>
    )
  }
};

export default Btn;