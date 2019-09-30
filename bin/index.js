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

   const findLangs = async (username, API_KEY) => {
     for (i = 0; i < userRepos.length; i++) {
       let response = await fetchLanguages(username, userRepos[i]['name'], API_KEY)
       languages.push(response.data);
     }
   }
   await findLangs(options.username, API_KEY);
   let final = await filterEmpties(languages);
   let sum = await sumOfLanguages(final);
   let filtered = await delete1(sum);
   let favLanguage = await favLang(filtered, sum);

   const msgBox = boxen( `${options.username}'s favourite language is: ${favLanguage}`, boxenOptions );
   console.log(msgBox);

 }
 findLang();
