const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const app = express();

//  Include packages needed for this application
const { type } = require('express/lib/response');
const inquirer = require('inquirer');
const cTable = require('console.table');

// express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


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
    if (answer.options === 'View All Employees') {
      getEmployees();
    }
    if (answer.options === 'View All Roles') {
      getRoles();
    }
  })
}

function getRoles() {
  const sql = `SELECT role.id, role.title, role.salary, department.name AS department 
  FROM role
  LEFT JOIN department
  ON role.department_id = department.id`;

  runQuery(sql);
};

function getEmployees() {
  const sql = `SELECT employee.id ,employee.first_name, employee.last_name, role.title, role.salary, department.name AS department
  FROM employee
  LEFT JOIN role
  ON employee.role_id = role.id
  LEFT JOIN department
  ON role.department_id = department.id`;

  runQuery(sql);

};

function runQuery(sql) {
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.table(rows);
  });
}
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