// Require all npm packages and files
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generate = require("./utils/generate");
const api = require("./api");

function init() {

    inquirer.
        prompt([{
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a short description of your project.",
            name: "desc"
        },
        {
            type: "input",
            message: "installations",
            name: "installations"
        },
        {
            type: "input",
            message: "Usage",
            name: "usage"
        },
        {
            type: "input",
            message: "License",
            name: "license"

        },
        {
            type: "input",
            message: "Contributing",
            name: "contributing"

        },
        {
            type: "input",
            message: "Test",
            name: "test"
        }


        ])
        .then(function (answers) {
            api.getUser(response.username);
            const queryUrl = `https://api.github.com/users/${answers.username}`;
            axios.get(queryUrl).then(function (response) {
                response.data.html_url = answers.html_url
                fs.writeFile('read.md', generate(answers), function (err) {
                    if (err) throw err;
                    console.log('SDone!');
                });

            })

        })

        

}
init();