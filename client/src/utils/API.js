import axios from 'axios';

export default {
  // Gets articles from the NYT API
  getPlaceInfo: function(params) {
    return axios.get("/api/API", { params: filterParams(params) });
  },
  // Gets all saved articles
  getSavedPlaces: function() {
    return axios.get("/api/places");
  },
  // Deletes the saved article with the given id
  deletePlace: function(id) {
    return axios.delete("/api/places/" + id);
  },
  // Saves an article to the database
  savePlace: function(placeData) {
    return axios.post("/api/places", articleData);
  }
};








// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// //not exactly sure how to handle this page this maps all the places to the home page so I don't know if we need it
// class App extends Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         places: []
//       };
//     }
  
//     componentDidMount() {
//       axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//       axios.get('/api/place')
//         .then(res => {
//           this.setState({ places: res.data });
//           console.log(this.state.places);
//         })
//         .catch((error) => {
//           if(error.response.status === 401) {
//             this.props.history.push("/login");
//           }
//         });
//     }
  
//     logout = () => {
//       localStorage.removeItem('jwtToken');
//       window.location.reload();
//     }
  
//     render() {
//       return (
//         <div class="container">
//           <div class="panel panel-default">
//             <div class="panel-heading">
//               <h3 class="panel-title">
//                 LOCATION CATALOG &nbsp;
//                 {localStorage.getItem('jwtToken') &&
//                   <button class="btn btn-primary" onClick={this.logout}>Logout</button>
//                 }
//               </h3>
//             </div>
//             <div class="panel-body">
//               <table class="table table-stripe">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Places</th>
//                     <th>Website</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.places.map(place =>
//                     <tr>
//                       <td><Link to={`/show/${place._id}`}>{place.id}</Link></td>
//                       <td>{place.place}</td>
//                       <td>{place.website}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default App;