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
    inquirer.prompt({
      type: 'confirm',
      name: 'done',
      message: 'Are you done?',
      default: 'true'
    })
      .then((done) => {
        startScreen();
      })
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
    inquirer.prompt({
      type: 'confirm',
      name: 'done',
      message: 'Are you done?',
      default: 'true'
    })
      .then((done) => {
        startScreen();
      })
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
    inquirer.prompt({
      type: 'confirm',
      name: 'done',
      message: 'Are you done?',
      default: 'true'
    })
      .then((done) => {
        startScreen();
      })
  });
}

// Add a Department
function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'name',
    message: "What is the name of the department you'd like to add?"
  })
  const sql = `INSERT INTO department `
}
// Add a Role

// Add an employee

// Update an Employee

startScreen();
