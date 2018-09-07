import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./logIn.css";
import axios from 'axios';
// import LogInBtn from "../../components/btn";
// import FormInput from "../../components/formInput";
// import Btn from "../../components/btn";
// import Ball from "../../images/fetch.png";
// import Fetch from "../../images/fetchlogo.png";

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
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
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
  
  render() {
     const { username, password, message } = this.state;
     return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p>
            Not a member? <Link to="../signup"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>
    );
      
    }
  }
// const LogIn = (props) => ( 
//         <div className="logInPage">
//         <div className="logInLogo"><img src={Fetch} alt="fetch" id="logoPhoto"/></div>
//         <div className="logInForm">
//                 <FormInput className="logInEmailField" label="Email:" type="text" name="email"/> 
//                 <FormInput className="logInPasswordField" label="Password:" type="text" name="password"/> 
//         </div>
//         <div className="logInButtons">
//         <Btn className="logInBtn" label={<img src={Ball} alt="update" id="updateButton"/>} />
//         <p className="signUpLink">Or sign up <Link to={'/#signUp'}>here</Link></p> 
//         </div>
//         </div>
//       );

export default LogIn;