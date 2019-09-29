#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");

const { fetchUser } = require('./src/fetchUser');
const { fetchLanguages } = require('./src/fetchLanguages');

const token = "be94e3e8b03a88ca0d4d8cffa06cd6b89de4964c"

const options = yargs
 .usage("Usage: -u <username>")
 .option("u", { alias: "username", describe: "enter username", type: "string", demandOption: true })
 .option("s", { alias: "search", describe: "Search term", type: "string"})
 .argv;


 const findLang = async () => {




   let userRepos = await fetchUser(options.username, token)

   let languages = []

  const findLangs = async (username, token) => {

    for (i = 0; i < userRepos.length; i++) {

    let response = await fetchLanguages(username, userRepos[i]['name'], token)
console.log(response);
    languages.push(response);

    }


}
await findLangs(options.username, token);





 }
 findLang();
