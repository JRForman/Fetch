import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// fetch pages
import Error from "./404";
import LogIn from "./logIn";
import Main from "./main";
import Profile from "./profile";
import SignUp from "./signUp";
import Update from "./update";
import Welcome from "./welcome";

// api pages
// import ApiWelcome from "./apiWelcome";
// import ApiContact from "./apiContact";
// import ApiDashboard from "./apiDashboard";
// import ApiDocumentation from "./apiDocumentation";
// import ApiForm from "./apiForm";

const App = () => (
  <Router>
    <div>
      <Switch>
           <Route exact path="/" component={Welcome} />    
          <Route exact path="/main" component={Main} />  
          <Route exact path="/login" component={LogIn} />     
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />  
          <Route exact path="/update" component={Update} />  
          {/* <Route exact path="/apiWelcome" component={ApiWelcome} />  
           <Route exact path="/apidocumentation" component={ApiDocumentation} />  
          <Route exact path="/apiform" component={ApiForm} />      
         <Route exact path="/apidashboard" component={ApiDashboard} /> 
         <Route exact path="/apicontact" component={ApiContact} />   */}
          <Route component={Error} />      
        </Switch> 
    </div>
</Router>
    );

export default App;