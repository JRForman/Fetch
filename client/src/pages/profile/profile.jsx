import React, { Component } from "react";
import "./profile.css";
import axios from 'axios';
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Map from "../../components/map";
// request credentials...
class Profile extends Component {

        constructor() {
           super();
           this.state = {
              username: '',
              password: '',
              email: '',
              zipCode: '',
              petName: [],
              favoriteLocation: []
           };
        }

        componentWillMount(){
                // Check if u_id exist before making call to server
            console.log(localStorage.getItem("u_id"));
            axios.get(`/routes/api/user/${localStorage.getItem("u_id")}`).then(user => {
                this.setState(user.data);
            });
        }

        onChange = (e) => {
           const state = this.state
           state[e.target.name] = e.target.value;
           console.log(state);
           this.setState(state);
        }

        getUserInfo = () => {

        }
     
        onSubmit = (e) => {
           e.preventDefault();
     
           const { username, email, password, zipCode, petName, favoriteLocation } = this.state;
     
           axios.post('/routes/api/signup', { username, email, password,zipCode, petName, favoriteLocation })
              .then((result) => {
                 console.log("RESULT" + JSON.stringify(result))
                 this.props.history.push("../login")
                 // pushes a new entry onto the history stack
              });
     
           console.log("I did something");
        }

        render() {
<<<<<<< HEAD
          const {username, email, password,zipCode, petName, favoriteLocation } = this.state;
          return (
              <div className="profilePage">
              <div className="navBarDiv">
              <NavBar />
              </div>
              <div className="personalInfo">
                      <h5 className="line1">Name:{username}</h5> 
                      <h5 className="line2">Email:{email}</h5>
                      <h5 className="line3">Reset Password</h5>
                      <h5 className="line4">Pet Name:{petName}</h5>
                      <h5 className="line5">Zip Code:{zipCode}</h5>
                      <h5 className="line6">Favorite Locations:{favoriteLocation}</h5>
              </div>
              <div className="personalMap">
                   <Map />
              </div>
              <div className="footerDiv">
                      <Footer />
              </div>
      </div>
          )
=======
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
>>>>>>> c6e096bb9e5b739365b593d483fe1cf1333d1a58
        }
}

export default Profile;

