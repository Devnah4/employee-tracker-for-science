const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Start Screen
function startScreen() {
    inquirer.prompt({
        type: 'list',
        name: 'start',
        message: "Welcome, please select from the folowing options.",
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role"
        ]
    })
}

// View all the departments

// View all the roles

// View all the Employees

// Add a Department

// Add a Role

// Add an employee

// Update an Employee
