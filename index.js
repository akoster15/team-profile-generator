//Import node modules
const inquirer = require("inquirer");
const fs = require("fs");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

//Import classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlGenerator = require("./src/htmlGenerator");
const employees = [];

