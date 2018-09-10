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
        }
      }

export default Profile;

