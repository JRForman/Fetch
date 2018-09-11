import React, { Component } from "react";
import axios from 'axios';
import "./signUp.css";
import Btn from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import Fetch from "../../images/fetchlogo.png";

class SignUp extends Component {

   constructor() {
      super();
      this.state = {
         username: '',
         password: '',
         email: '',
         zipCode: '',
         petName: ''
      };
   }
   onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      console.log(state);
      this.setState(state);
   }

   onSubmit = (e) => {
      e.preventDefault();

      const { username, email, password, zipCode, petName } = this.state;

      axios.post('/routes/api/signup', { username, email, password, zipCode, petName })
         .then((result) => {
            console.log("RESULT" + JSON.stringify(result))
            localStorage.setItem("u_id", result.data.id)

            this.props.history.push("../login")
            // pushes a new entry onto the history stack
         });

      console.log("I did something");
   }

   render() {
      const { username, email, password, zipCode, petName } = this.state;
      return (
         <form className="signUpPage" onSubmit={this.onSubmit}>
            <div className="signUpLogo"><img src={Fetch} alt="fetch" id="signUpPhoto" /></div>
            <div className="signUpForm">
               <FormInput className="signUpNameField" label="Name:" type="text" name="username" change={this.onChange} value={username} />
               <FormInput className="signUpEmailField" label="Email:" type="email" name="email" value={email} change={this.onChange} required />
               <FormInput className="signUpPasswordField" label="Password:" type="text" name="password" value={password} change={this.onChange} required />
               <FormInput className="signUpZipcodeField" label="zipcode" type="number" name="zipCode" value={zipCode} change={this.onChange} required />
               <FormInput className="signUpPetNameField" label="Pet Name:" type="text" name="petName" value={petName} change={this.onChange} required />
            </div>
            <div className="signUpButtons">
            <Btn className="signUpBtn" label="Sign Up" type="submit" />
               <Link to='/main'><Btn className="signUpCancelBtn" label="Cancel" /></Link>
               <p className="logInLink" type="submit">Or log in <Link to='/logIn'>here</Link></p>
            </div>
         </form>
      )
   }
}
export default SignUp;