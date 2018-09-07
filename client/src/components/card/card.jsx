import React, { Component } from "react";
import "./card.css";
import Btn from "../btn";
import Paw from "../../images/paw.png";
import Star from "../../images/star24.png";


class Card extends Component {
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
          <Btn className="cardFavoriteBtn" label={<img src={Star} alt="favorites button" id="favoritesButton" />} />
          <Btn className="cardCommentBtn" label="Comment" alt="comment button" id="commentButton" />} />
      </div>
        <div className="card-body">{"props.children"}  
          <span>
            <Btn className="cardRatingBtn" label={<img src={Paw} alt="rating 1" id="rating1" />} />
            <Btn className="cardRatingBtn" label={<img src={Paw} alt="rating 2" id="rating2" />} />
            <Btn className="cardRatingBtn" label={<img src={Paw} alt="rating 3" id="rating3" />} />
            <Btn className="cardRatingBtn" label={<img src={Paw} alt="rating 4" id="rating4" />} />
            <Btn className="cardRatingBtn" label={<img src={Paw} alt="rating 5" id="rating5" />} />
          </span>
        </div>
      </div>
    );
  };
};
export default Card;
