import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import ResultsAddBtn from "../btn";
import Btn from "../btn";
import UpVoteBtn  from "../btn";
import DownVoteBtn  from "../btn";


class Card extends Component {
  state = { label: "omment"};
  render() {
    return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${"props.icon"}`} aria-hidden="true" />{" "}
            {"props.title"}
          </strong>
        </h3>
        <ResultsAddBtn />
        <Btn onClick={this.handleFormSubmit}
                   label = {this.state.label}
                   >
                   </Btn>
      </div>
      <div className="card-body">{"props.children"} 
      <UpVoteBtn />
      <DownVoteBtn />
      </div>
    </div>
    )  
}
}
  export default Card;