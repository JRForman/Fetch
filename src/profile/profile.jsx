import React, { Component } from "react";
import "./profile.css";
import NavBar from "../navBar";
import Footer from "../footer";
import Map from "../map";
import { Link } from "react-router-dom";

class Profile extends Component {
        render() {
          return (
              <div className="profilePage">
              <div className="navBarDiv">
              <NavBar />
              </div>
              <div className="personalInfo">
                      <img>{{ img: `url(this.image)`}}</img>
                      <h5 className="line1">Name:{this.name}</h5> 
                      <h5 className="line2">Email:{this.email}</h5>
                      <h5 className="line3">Password:{this.password}</h5>
                      <h5 className="line4">Pet Name:{this.petName}</h5>
                      <h5 className="line5">Zip Code:{this.zipCode}</h5>
                      <h5 className="line6">Favorite Locations:{this.locations}</h5>
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

