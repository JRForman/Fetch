// const db = require("../models");
// const axios = require('axios');

// module.exports = {
//     findAll: function(req,res) {

//       axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//       axios.get('/api/place'),
//     // api url here
//         .then(res => {
//           db.Place
//           .find()
//         //   .then(dbPlace =>
//             //get info from API.)
//             // respons.filter(place =>
//             //     dbPlace.every(
//             //       dbPlace => dbPlace._id.toString() !== place._id
//             // response.data.response.docs.filter(article =>
//             //   
//                 // )
//         .then(places => res.json(places))
//         .catch((error) => {
//           if(error.response.status === 401) {
//             this.props.history.push("../client/src/pages/main");
//           }
//         });
//     }
  
// logout = () => {
//     localStorage.removeItem('jwtToken');
//     window.location.reload();
// }

// )}