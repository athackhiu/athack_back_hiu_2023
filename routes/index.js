var express = require('express');
var router = express.Router();
// var axios = require('axios');
// var data = JSON.stringify({
//   "client_id": "2601f408-027d-4dc5-a538-f995bf4ee17d",
//   "client_secret": "a353ed73-c3cf-4c97-8135-13f4a1976cc1",
//   "grant_type": "client_credentials"
// });

// var config = {
//   method: 'post',
//   url: 'https://openapiuat.airtel.africa/auth/oauth2/token',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

router.get('/', function(req, res, next) { 
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // res.send('BIENVENU');
    res.send('Bienvenu')
});

module.exports = router;