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

//Questions for every employee
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Engineer", "Intern", "Manager"]
    }
];

//Questions for managers
managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: officeNumber => {
            if (officeNumber) {
              return true;
            } else {
              console.log("Please enter an office number!");
              return false;
            }
          }
    }
];

//Questions for interns
internQuestions = [

    {
        type: "input",
        name: "school",
        message: "What school is the intern from? (Required)",
        validate: school => {
            if (school) {
              return true;
            } else {
              console.log("Please enter a school name!");
              return false;
            }
          }
    }
];

//Initialize app
const init = () => {
  if (fs.existsSync(filePath)) {
      inquirer.prompt({
          type: "confirm",
          message: "It looks like the index.html file in the 'dist' folder already exists. Do you want to overwrite it?",
          name: "overwrite"
      }).then(async (response) => {

          let overwrite = response.overwrite;
          if (await overwrite === true) {
              console.log("Please enter your team information:")
              newEmployee()
          } else if (await overwrite === false) {
              console.log("Your index.html file in the 'dist' folder will not be overwritten. Please move the current index.html file to another folder before restarting.")
          }
      })
  } else {
      console.log("Welcome to the team profile generator. Please enter your team information below:")
      newEmployee()
  }
};   

//Initialize app
const init = () => {
  if (fs.existsSync(filePath)) {
      inquirer.prompt({
          type: "confirm",
          message: "It looks like the index.html file in the 'dist' folder already exists. Do you want to overwrite it?",
          name: "overwrite"
      }).then(async (response) => {

          let overwrite = response.overwrite;
          if (await overwrite === true) {
              console.log("Please enter your team information:")
              newEmployee()
          } else if (await overwrite === false) {
              console.log("Your index.html file in the 'dist' folder will not be overwritten. Please move the current index.html file to another folder before restarting.")
          }
      })
  } else {
      console.log("Welcome to the team profile generator. Please enter your team information below:")
      newEmployee()
  }
};   