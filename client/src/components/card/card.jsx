import React, { Component } from "react";
import "./card.css";
import Btn from "../btn";
import Paw from "../../images/paw.png";
import Star from "../../images/star24.png";

const Card = (props) => (
      <div className="card">
        <div className="cardHeader">
          <h3>
            <strong>
              <i className={props.className} aria-hidden="true" />
              <div className="locTitle">{props.title}</div>
              <div className="locAdress">{props.address}</div>
              <div className="locWebsite">{props.website}</div>   
            </strong>
          </h3>
          <Btn className="cardFavoriteBtn" label={<img src={Star} alt="favorites button" id="favoritesButton" />} />
          <Btn className="cardCommentBtn" label="Comment" alt="comment button" id="commentButton" />
      </div>
        <div className="cardBody">{props.children}  
          
        </div>
        <div className="cardFooter">
        <span>
            <Btn className="cardRatingBtn1" label={<img src={Paw} alt="rating 1" id="rating1" />} />
            <Btn className="cardRatingBtn2" label={<img src={Paw} alt="rating 2" id="rating2" />} />
            <Btn className="cardRatingBtn3" label={<img src={Paw} alt="rating 3" id="rating3" />} />
            <Btn className="cardRatingBtn4" label={<img src={Paw} alt="rating 4" id="rating4" />} />
            <Btn className="cardRatingBtn5" label={<img src={Paw} alt="rating 5" id="rating5" />} />
          </span>
          <Btn className="cardViewCommentBtn" label="View Comments" alt="vie comments button" id="viewCommentButton" />
        </div>
      </div>
    );

export default Card;
