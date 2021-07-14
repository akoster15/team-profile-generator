//Import node modules
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

//Import classes
const Engineer = require("./lib/Engineer.test");
const Intern = require("./lib/Intern.test");
const Manager = require("./lib/Manager.test");
const htmlGenerator = require("./src/htmlGenerator");
const members = [];