import React from "react";
import "./map.css";
// import "./mapApp.js";
import Btn from "../btn";
import Activities from "../../images/activitiesbtn.png";
import Bars from "../../images/barsbtn.png";
import Coffee from "../../images/coffeebtn.png";
import  Events from "../../images/eventsbtn.png";
import  Food from "../../images/foodbtn.png";
import  Hotels from "../../images/hotelsbtn.png";
import  Parks from "../../images/parksbtn.png";
import  PetPlaces from "../../images/petplacesbtn.png";
import  Rentals from "../../images/rentalsbtn.png";
import  Shopping from "../../images/shoppingbtn.png";

const Map = (props) => ( 
    <div className="mapPage">
        <div className="mapBtns">
            <Btn className="activitiesMapBtn" label={<img src={Activities} alt="activities button" id="activitiesButton"/>} />
            <Btn className="barsMapBtn" label={<img src={Bars} alt="bars button" id="barsButton"/>} />
            <Btn className="coffeeMapBtn" label={<img src={Coffee} alt="coffee button" id="coffeeButton"/>} />
            <Btn className="eventsMapBtn" label={<img src={Events} alt="events button" id="eventsButton"/>} />
            <Btn className="foodMapBtn" label={<img src={Food} alt="food button" id="foodButton"/>} />
            <Btn className="hotelsMapBtn" label={<img src={Hotels} alt="hotels button" id="hotelsButton"/>} />
            <Btn className="parksMapBtn" label={<img src={Parks} alt="parks button" id="parksButton"/>} />
            <Btn className="petPlacesMapBtn" label={<img src={PetPlaces} alt="pet places button" id="petPlacesButton"/>} />
            <Btn className="rentalsMapBtn" label={<img src={Rentals} alt="rentals button" id="rentalsButton"/>} />
            <Btn className="shoppingMapBtn" label={<img src={Shopping} alt="shopping button" id="shoppingButton"/>} />
        </div>
    </div>
);


export default Map;