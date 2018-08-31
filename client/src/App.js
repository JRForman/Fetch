import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Error from "./components/error";
import LogIn from "./components/logIn";
import Main from "./components/main";
import Profile from "./components/profile";
import SignUp from "./components/signUp";
import Update from "./components/update";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
