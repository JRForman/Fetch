import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

// fetch pages
import Error from "./pages/404";
import LogIn from "./pages/logIn";
import Main from "./pages/main";
import Profile from "./pages/profile";
import SignUp from "./pages/signUp";
import Update from "./pages/update";
import Welcome from "./pages/welcome";

// api pages
// import ApiWelcome from "./pages/apiWelcome";
// import ApiContact from "./pages/apiContact";
// import ApiDashboard from "./pages/apiDashboard";
// import ApiDocumentation from "./pages/apiDocumentation";
// import ApiForm from "./pages/apiForm";

class App extends Component{
render() {
  return (
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



  // constructor(props) {
  //   super(props);
  //     this.state = {
  //     places: []
  //   };
  // }

  // componentDidMount() {
  //   axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  //   axios.get('/api/place')
  //     .then(res => {
  //       this.setState({ places: res.data });
  //       console.log(this.state.places);
  //     })
  //     .catch((error) => {
  //       if(error.response.status === 401) {
  //         this.props.history.push("/login");
  //       }
  //     });
  // }

  // logout = () => {
  //   localStorage.removeItem('jwtToken');
  //   window.location.reload();
  // }
  )
}
};
export default App;