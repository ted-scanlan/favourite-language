const axios = require("axios");

const fetchLanguages = (username, repo, token) => {


   return axios.get(`http://api.github.com/repos/${username}/${repo}/languages`, {
     headers: {
       Authorization: 'Bearer ' + token
     }
   })
        }

        module.exports = {
         fetchLanguages
       };
