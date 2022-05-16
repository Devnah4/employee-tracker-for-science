const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./config/connections");

// Start Screen
function startScreen() {
  inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "Welcome, please select from the folowing options.",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
        "Exit",
      ],
    })
    // Starts all of the functions to view and edit data
    .then(function ({ start }) {
      switch (start) {
        case "View all Departments":
          viewDepartments();
          break;

        case "View all Roles":
          viewRole();
          break;

        case "View all Employees":
          viewEmployee();
          break;

        case "Add a Department":
          addDepartment();
          break;

        case "Add a Role":
          addRole();
          break;

        case "Add an Employee":
          addEmployee();
          break;

        case "Update an Employee Role":
          updateEmployee();
          break;

        // ends the program
        case "Exit":
          db.end();
          console.log("Thanks for using the Employee Tracker!");
          break;
      }
    });
}

// View all the departments
function viewDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(res);
    inquirer
      .prompt({
        type: "confirm",
        name: "done",
        message: "Are you done?",
        default: "true",
      })
      .then((done) => {
        startScreen();
      });
  });
}

// View all the roles
function viewRole() {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(res);
    inquirer
      .prompt({
        type: "confirm",
        name: "done",
        message: "Are you done?",
        default: "true",
      })
      .then((done) => {
        startScreen();
      });
  });
}

// View all the Employees
function viewEmployee() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(res);
    inquirer
      .prompt({
        type: "confirm",
        name: "done",
        message: "Are you done?",
        default: "true",
      })
      .then((done) => {
        startScreen();
      });
  });
}

// Add a Department
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "What is the name of the department you'd like to add?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("This entry is not valid!");
          return false;
        }
      },
    })
    .then((name) => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, [name.name], (err, res) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(`${name.name} was added to the department table.`);
        startScreen();
      });
    });
}

// Add a Role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the role you would like to add?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please Enter a Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role you would like to add?",
        validate: (salaryInput) => {
          if (salaryInput) {
            return true;
          } else {
            console.log("Please Enter a Salary!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department id of the role you would like to add?",
        validate: (department_idInput) => {
          if (department_idInput) {
            return true;
          } else {
            console.log("Please Enter a Department ID!");
            return false;
          }
        },
      },
    ])
    .then((role) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
      db.query(
        sql,
        [role.title, role.salary, role.department_id],
        (err, res) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log(`${role.title} was added to the role table.`);
          startScreen();
        }
      );
    });
}

// Add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the Employee you'd like to add?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the Employee you'd like to add?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the role id of the Employee you'd like to add?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a Role ID!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "manager_id",
        message: "Would you like to add a manager?",
        default: false,
      },
    ])
    .then((employee) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
      db.query(
        sql,
        [
          employee.first_name,
          employee.last_name,
          employee.role_id,
          employee.manager_id,
        ],
        (err, res) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log(
            `${employee.first_name} ${employee.last_name} was added to the employee table.`
          );
          startScreen();
        }
      );
    });
}

// Update an Employee role
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message:
          "What is the employee id of the Employee you'd like to update?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter an Employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the id for their new role?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please Enter a Role ID!");
            return false;
          }
        },
      },
    ]).then((employee) => {
      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      const params = [
        employee.role_id,
        employee.id,
      ];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(sql)
        console.table(res);
      });
      console.log(`Employee was succesfully updated.`);
      startScreen();
    });
}

startScreen();
