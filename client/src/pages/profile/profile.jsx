import React from "react";
import "./profile.css";
import Btn from "./components/btn";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Map from "./components/map";

const Profile = props => (
        <div className="profilePage">
                <div className="navBarDiv">
                        <div className="profileNavBar">{props.NavBar}</div>
                </div>
                <div className="personalInfo">
                        <img src="http://www.loveravayna.com/wp-content/uploads/2016/07/cartoon-ravayna.jpg" alt="userphoto" className="userPhoto" ></img>
                        <h5 className="line1">Name:</h5>
                        <h5 className="line2">Email:</h5>
                        <h5 className="line3">Password:</h5>
                        <h5 className="line4">Pet Name:</h5>
                        <h5 className="line5">Zip Code:</h5>
                        <h5 className="line6">Favorite Locations:</h5>
                </div>
                <div className="personalMap">
                        <div className="map">{props.Map}</div>
                </div>
                <div className="footerDiv">
                        <div className="profileFooter">{props.Footer}</div>
                </div>
        </div>
);

export default Profile;