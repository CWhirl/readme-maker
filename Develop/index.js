// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const license = require('generateMarkdown');

let projectInfo = '';
let userInfo = '';

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Enter a product description",
    "Enter the Installation Instructions",
    "Enter your Usage Information",
    "Enter your project's contribution guidelines",
    "Enter your test instructions",
    //post-license questions
    "Enter your GitHub Username",
    "Enter your E-Mail"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function getProjectInfo () {
 projectInfo = inquirer.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'install',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'contribution',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'test',
    },
    ])
    .then((response) => {
        projectInfo = 
        `Project Title: ${response.title}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Description: ${response.description}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Installation Instructions: ${response.install}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Contribution Instructions: ${response.contribution}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Testing Instructions: ${response.test}`;

        return projectInfo;
    });
}

function getUserInfo() {
    userInfo = inquirer.prompt([
        {
            type: 'list',
            message: 'Select your license',
            choices: [
                'MIT',
                'GNU',
            ],
        },
        {
            type: 'input',
            message: questions[5],
            name: 'gitHub'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'eMail',
        }
    ])
    .then((response) => {
        
    });
}

// TODO: Create a function to initialize app
function init() {
    getProjectInfo();
    getUserInfo();
    
}

// Function call to initialize app
init();
