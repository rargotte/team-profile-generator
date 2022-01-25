const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function getEmployees() {
    inquirer.prompt([{
        message: "Name: ",
        name: "name"
    },
    {
        type: "list",
        message: "Select Role (use arrows)",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "ID: ",
        name: "id"
    },
    {
        message: "EMAIL: ",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleData = "";
            if (role === "Manager") {
                roleData = "Office phone number";
            } else if (role === "Engineer") {
                roleData = "Github UserID";
            } else {
                roleData = "School";
            }
            inquirer.prompt([{
                message: `${roleData}: `,
                name: "employeeData"
            },
            {
                type: "list",
                message: "Another employee?: ",
                choices: [
                    "yes",
                    "no"
                ],
                name: "another"
            }])
                .then(function ({ employeeData, another }) {
                    let newEmployee;
                    if (role === "Manager") {
                        newEmployee = new Manager(name, id, email, employeeData);
                    } else if (role === "Engineer") {
                        newEmployee = new Engineer(name, id, email, employeeData);
                    } else {
                        newEmployee = new Intern(name, id, email, employeeData);
                    }
                    employees.push(newEmployee);
                    if (another === "yes") {
                        getEmployees();
                    } else {
                        buildHTML();
                    }

                });
        });
}

function buildHTML() {

    fs.readFile('./dist/employee.html', 'utf8', function (error, employeeCard) {
        if (error) {
            return console.error(error);
        }
        let employeeCards = '';
        employees.forEach(employee => {
            let newCard = employeeCard;
            newCard = newCard.replace('Name', employee.getName());
            newCard = newCard.replace('Role', employee.getRole());
            newCard = newCard.replace('ID', `ID: ${employee.getId()}`);
            newCard = newCard.replaceAll('email', employee.getEmail());

            switch (employee.getRole()) {
                case 'Manager':
                    newCard = newCard.replace('roleData', `<i class="fas fa-phone-square-alt"></i> <a href="tel:${employee.getOfficeNumber()}">${employee.getOfficeNumber()}</a>`);
                    break;
                case 'Engineer':
                    newCard = newCard.replace('roleData', `<i class="fab fa-github"></i> <a href="https://github.com/${employee.getGithubID()}"target="_blank">https://github.com/${employee.getGithubID()}</a>`);
                    break;
                case 'Intern':
                    newCard = newCard.replace('roleData', `<i class="fas fa-university"></i> ${employee.getSchool()}`);
                    break;
            }

            employeeCards = employeeCards + newCard;
            console.log(newCard);
        })
        fs.readFile('./dist/start.html', 'utf8', function (error, htmlStart) {
            if (error) {
                return console.error(error);
            }

            fs.readFile('./dist/end.html', 'utf8', function (error, htmlEnd) {
                if (error) {
                    return console.error(error);
                }
                fs.writeFile('./dist/index.html', (htmlStart + employeeCards + htmlEnd), (err) =>
                    err ? console.error(err) : console.log('Success!'))
            })
        })
    })
}



getEmployees();