import React from "react";
import "./profile.css";
import btn from "./components/btn";
import NavBar from "./components/NavBar";
import footer from "./components/footer";
import map from "./components/map";

const profile = props => (
    <div className="navBarDiv">
            <div className="profileNavBar">{props.navBar}</div>
    </div>
    <div className="personelInfo">
            <img src="http://www.loveravayna.com/wp-content/uploads/2016/07/cartoon-ravayna.jpg" alt="userphoto" id="userPhoto" ></img>
            <h5>Name:</h5>
            <h5>Email:</h5>
            <h5>Password:</h5>
            <h5>Pet Name:</h5>
            <h5>Zip Code:</h5>
            <h5>Favorite Locations:</h5>
            <div className="personalMap">{props.map}{props.btn}</div>
    </div>
    <div className="footerDiv">
            <div className="profileFooter">{props.footer}</div>
    </div>
);

export default profile;