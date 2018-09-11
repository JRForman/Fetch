const db = require("../models");
const axios = require('axios');

module.exports = {
    findAll: function(req,res) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      axios
      .get('// api url here',{
    })
    
        .then(res => {
          db.Place
          .find()
          .then(dbPlaces =>
            response.data.response.docs.filter(place =>
              dbPlaces.every(
                dbPlace => dbPlace._id.toString() !== place._id
              )
            )
          )
        .then(places => res.json(places))
        .catch((error) => {
          if(error.response.status === 401) {
            this.props.history.push("../client/src/pages/main");
          }
        });
    })
    
  
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

}
}