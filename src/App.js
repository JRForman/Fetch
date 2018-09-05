import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
      places: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/place')
      .then(res => {
        this.setState({ places: res.data });
        console.log(this.state.places);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
         return (
              <div class="container">
         <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
              LOCATION CATALOG &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Places</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {this.state.places.map(place =>
                  <tr>
                    <td><Link to={`/show/${place._id}`}>{place.id}</Link></td>
                    <td>{place.place}</td>
                    <td>{place.website}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
export default App;