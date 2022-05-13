const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

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
    .then(function ({ initial }) {
      switch (initial) {
        case "View all Departments":
          viewDepartments();
          break;

        case "View all Roles":
          viewRoles();
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
function viewDepartments() {}

// View all the roles

// View all the Employees

// Add a Department

// Add a Role

// Add an employee

// Update an Employee
