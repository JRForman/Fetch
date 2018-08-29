import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import error from "./components/error";
import logIn from "./components/logIn";
import main from "./components/main";
import profile from "./components/profile";
import signUp from "./components/signUp";
import update from "./components/update";



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
