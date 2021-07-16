//Import node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Import classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlGenerator = require("./src/htmlGenerator");
var employees = [];

//User chooses type of employee
function employeeType() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the role of this employee?",
            choices: ["Engineer", "Manager", "Intern", "Finished"]
        }
    ]) . then((responses) => {
        switch (responses.role) {
            case "Engineer":
                addEngineer()
                break;
            case "Manager":
                addManager()
                break;
            case "Intern":
                addIntern()
            case "Finished":
                finishApp()
                break;
            default:
                break;
        }
    })
}

//Questions for user if they selected "Engineer"
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
        },
    ])
    .then((responses) => {
        var engineer = new Engineer(
            responses.name,
            responses.id,
            responses.email,
            responses.github
        );
        employees.push(engineer)
        employeeType()
    });
}

//Questions for user if they selected "Manager"
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the manager's office number?",
        },
    ])
    .then((responses) => {
        var manager = new Manager(
            responses.name,
            responses.id,
            responses.email,
            responses.officeNum
        );
        employees.push(manager)
        employeeType()
    });
}

//Questions for user if they selected "Intern"
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's office number?",
        },
    ])
    .then((responses) => {
        var intern = new Intern(
            responses.name,
            responses.id,
            responses.email,
            responses.school
        );
        employees.push(intern)
        employeeType()
    });
}

//Finish App
function finishApp() {
    const makeHTML = htmlGenerator(employees);
    fs.writeFile("./dist/index.html", makeHTML, (err) =>
        err ? console.log(err) : console.log("Your list of employees has been created!")
    );
}

//Call to start app
employeeType();