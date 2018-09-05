import React, { Component } from "react";
import "./map.css";
// import "./mapApp.js";
import Btn from "../btn";
import { Link } from "react-router-dom";

const Map = props => (
    <div className="map">
        <div className="mapBtns">
            <Btn onClick={this.handleFilter.parks}
                type="submit">{{ img: `url("/public/assets/images/parksbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.food}
                type="submit">{{ img: `url("/public/assets/images/foodbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.coffee}
                type="submit">{{ img: `url("/public/assets/images/coffeebtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.bars}
                type="submit">{{ img: `url("/public/assets/images/barsbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.events}
                type="submit">{{ img: `url("/public/assets/images/eventsbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.hotels}
                type="submit">{{ img: `url("/public/assets/images/hotelsbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.rentals}
                type="submit">{{ img: `url("/public/assets/images/rentalsbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.petplaces}
                type="submit">{{ img: `url("/public/assets/images/petplacesbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.shopping}
                type="submit">{{ img: `url("/public/assets/images/shoppingbtn.png")` }}</Btn>
            <Btn onClick={this.handleFilter.activities}
                type="submit">{{ img: `url("/public/assets/images/activitiesbtn.png")` }}</Btn>
        </div>
    </div>
);

export default Map;