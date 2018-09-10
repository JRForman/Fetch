import React, { Component } from "react";
import "./profile.css";
import axios from 'axios';
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Map from "../../components/map";

class Profile extends Component {
        render() {
                return (
                        <div className="profilePage">
                                <div className="profileNavBarDiv">
                                        <NavBar />
                                </div>
                                <div className="personalInfo">
                                        <div className="personalInfoLine1">
                                                <img src={this.image} alt="user photo" id="ProfilePhoto" />
                                        </div>
                                        <div className="personalInfoLine2">
                                                <h5 className="line1">Name:{this.name}</h5>
                                        </div> 
                                       <div className="personalInfoLine3">
                                                <h5 className="line2">Email:{this.email}</h5>
                                        </div>
                                        <div className="personalInfoLine4">
                                                <h5 className="line3">Password:{this.password}</h5>
                                        </div>
                                        <div className="personalInfoLine5">
                                                <h5 className="line4">Pet Name:{this.petName}</h5>
                                        </div>
                                        <div className="personalInfoLine6">
                                                <h5 className="line5">Zip Code:{this.zipCode}</h5>
                                        </div>
                                        <div className="personalInfoLine7">
                                                <h5 className="line6">Favorite Locations:{this.locations}</h5>
                                        </div>
                                </div>
                                <div className="personalMap">
                                        <Map />
                                </div>
                                <div className="footerDiv">
                                        <Footer />
                                </div>
                        </div>
                )
        }
}

export default Profile;

