#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");

const token = "be94e3e8b03a88ca0d4d8cffa06cd6b89de4964c"

const options = yargs
 .usage("Usage: -u <username>")
 .option("u", { alias: "username", describe: "enter username", type: "string", demandOption: true })
 .option("s", { alias: "search", describe: "Search term", type: "string"})
 .argv;


const findLang = async () => {

}
