import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./logIn.css";
import axios from 'axios';
import LogInBtn from "../../components/btn";
import FormInput from "../../components/formInput";
import Btn from "../../components/btn";
import Ball from "../../images/fetch.png";
import Fetch from "../../images/fetchlogo.png";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    this.setState({[name]: value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/routes/api/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
         // pushes a new entry onto the history stack
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }
  
 
  // const LogIn = (props) => (
render() {
  const { username, password, message } = this.state;
  return (
    <form className="form-signin" onSubmit={this.onSubmit}>
        {message !== '' &&
          <div className="alert alert-warning alert-dismissible" role="alert">
            { message }
          </div>
        }
    <div className="logInPage">
    <div className="logInLogo"><img src={Fetch} alt="fetch" id="logoPhoto"/></div>
    <div className="logInForm">
            <FormInput className="logInEmailField" label="username:" type="text" name="username" value={username} change={this.onChange} required/> 
            <FormInput className="logInPasswordField" label="Password:" type="text" name="password" value={password} change={this.onChange} required/> 
    </div>
    <div className="logInButtons">
    <Btn className="logInBtn" label={<img src={Ball} alt="update" id="updateButton"/>} />
    <p className="signUpLink">Or sign up <Link to={'../signup'}>here</Link></p> 
    </div>
    </div>
    </form>
  )
  }
}

export default LogIn;