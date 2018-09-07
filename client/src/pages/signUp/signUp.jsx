import React, { Component } from "react";
import "./signUp.css";
import Btn from "../../components/btn";
import PageLinks from "../../components/btn";
import FormInput from "../../components/formInput";
import { Link } from "react-router-dom";
import axios from 'axios';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
                username: '',
                password: '',
                email: '',
                password: '',
                petName: [],
                zipCode: ''
            };
        }
        onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        }

        onSubmit = (e) => {
        e.preventDefault();

        const { username, email, password, petName, zipCode} = this.state;

        axios.post('/routes/api/signup', { username, email, password, petName, zipCode})
                .then((result) => {
                this.props.history.push("../login")
                 // pushes a new entry onto the history stack
                });
        }

        render() {
        const { username, email, password, petName, zipCode} = this.state;
        return (
                <div class="container">
                <form class="form-signin" onSubmit={this.onSubmit}>
                <h2 className="form-signin-heading">Register</h2>
                <label  className="sr-only">username</label>
                <input type="username" className="form-control" placeholder="username" name="username" value={username} onChange={this.onChange} required/>
                <label  className="sr-only">Email address</label>
                <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
                <label  className="sr-only">Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                <label className="sr-only">Pet Name</label>
                <input type="petName" className="form-control" placeholder="PetName" name="petName" value={petName} onChange={this.onChange} required/>
                <label  className="sr-only">Zipcode</label>
                <input type="zipCode" className="form-control" placeholder="zipCode" name="zipCode" value={zipCode} onChange={this.onChange} required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
                </div>
        );
}



    // render() {
    //   return (
    // <div className="signUpPage">
    //     <div className="SignUpLogo"><img src="/public/assets/images/fetch logo.png" alt="logo"></img></div>
    //     <div className="signUpForm">
    //         <FormInput className="nameField">{this.FormInput.name}</FormInput>
    //         <FormInput className="emailField">{this.FormInput.email}</FormInput>
    //         <FormInput className="passwordField">{this.FormInput.password}</FormInput>
    //         <FormInput className="petNameField">{this.FormInput.petName}</FormInput>
    //         <FormInput className="zipCodeField">{this.FormInput.zipCode}</FormInput>
    //     </div>
    //     <div className="signUpButtons">
    //         <Link to='/#profile'><Btn onClick={this.handleFormSubmit}
    //             type="submit">Submit</Btn>
    //         </Link>
    //         <PageLinks onClick={this.logInLink} />
    //         <Link to='/#logIn'><Btn onClick={this.handleFormCancel}
    //             type="submit">Cancel</Btn></Link>
    //     </div>
    // </div>
    //   )
    // }
}
        
export default SignUp;