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
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's Github username?",
        },
    ])
    .then((responses) => {
        var engineer = new Engineer(
            responses.engineerName,
            responses.engineerId,
            responses.engineerEmail,
            responses.engineerGithub
        );
        employees.push(engineer)
        employeeType()
    });
}

//Questions for user if they selected "Manager"
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the manager's office number?",
        },
    ])
    .then((responses) => {
        var manager = new Manager(
            responses.managerName,
            responses.managerId,
            responses.managerEmail,
            responses.managerOfficeNum
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
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's office number?",
        },
    ])
    .then((responses) => {
        var intern = new Intern(
            responses.internName,
            responses.internId,
            responses.internEmail,
            responses.internSchool
        );
        employees.push(manager)
        employeeType()
    });
}

//Finish App
function finishApp() {
    const makeHTML = generateHTML(employees);
    fs.writeFile("./dist/index.html", makeHTML, (err) =>
        err ? console.log(err) : console.log("Your list of employees has been created!")
    );
}

//Call to start app
employeeType();