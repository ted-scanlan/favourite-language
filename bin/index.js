#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");
require('dotenv').config();

const { fetchUser } = require('./src/fetchUser');
const { fetchLanguages } = require('./src/fetchLanguages');
const { filterEmpties } = require('./src/calculateLanguage');
const { sumOfLanguages } = require('./src/calculateLanguage');
const { delete1 } = require('./src/calculateLanguage');
const { favLang } = require('./src/calculateLanguage');
const { sortLanguages } = require('./src/sortLanguages');



API_KEY = process.env.API_KEY

const options = yargs
 .usage("Usage: -u <username>")
 .option("u", { alias: "username", describe: "enter username", type: "string", demandOption: true })
 .option("s", { alias: "search", describe: "Search term", type: "string"})
 .argv;

 const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555"
};

 const findLang = async () => {

   let userRepos = await fetchUser(options.username, API_KEY)
   let languages = []

   let repoArray = []
   for (i = 0; i < userRepos.length; i++) {
     repoArray.push(userRepos[i]['name'])
   }


   let repoLanguages = []

   const findLangs = async (username, API_KEY) => {


     for (i = 0; i < repoArray.length; i++) {
       axios.get(`http://api.github.com/repos/${username}/${repoArray[i]}/languages`, {
       headers: {
         Authorization: 'Bearer ' + API_KEY
       }
     })
     .then(response => {
         const apiResponse = response.data;
         repoLanguages.push(apiResponse);
          })
     }

    setTimeout(() => sortLanguages(repoLanguages, username), 700);
   }
   findLangs(options.username, API_KEY);

 }
 findLang();
