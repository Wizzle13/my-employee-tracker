//  Include packages needed for this application
const { type } = require('express/lib/response');
const inquirer = require('inquirer');
const cTable = require('console.table');

const menu = () => {
    return inquirer.prompt([
        {    
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                "Exit"
            ]
        },
    ])
    .then((answer) => {
        // getEmployees();
        if (answer.options === 'View All Employees') {
            getEmployees();
        }
    })
}

const getEmployees = () => {
  fetch('/api/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.table(data);
};


// Create a function to initialize app
function init() {
    console.log(`
+++++++++++++++++++
My Employee Tracker
+++++++++++++++++++
`)
menu()
}


// Function call to initialize app
init();