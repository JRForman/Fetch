// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Error from "./components/error";
// import LogIn from "./components/logIn";
// import Main from "./components/main";
// import Profile from "./components/profile";
// import SignUp from "./components/signUp";
// import Update from "./components/update";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
}

export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
