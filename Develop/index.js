// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


let projectInfo = '';
const filePath = __dirname + '/generatedReadMe.md';

// TODO: Create an array of questions for user input
const questions = [
    "Enter the title of your project: ",
    "Enter a product description: ",
    "Enter the Installation Instructions: ",
    "Enter your Usage Information: ",
    "Enter your project's contribution guidelines: ",
    "Enter your test instructions: ",
    //post-license questions
    "Enter your GitHub Username: ",
    "Enter your E-Mail: "
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
      case 'MIT':
        return "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
      case 'GNU':
        return "\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
      case '':
        return "";
      default:
        return "Unrecognized License";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch(license) {
      case 'MIT':
        return "https://opensource.org/licenses/MIT";
      case 'GNU':
        return "https://www.gnu.org/licenses/gpl-3.0";
      case '':
        return "";
      default:
        return "Unrecognized License";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return renderLicenseBadge(license);
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `${renderLicenseSection(data)}`;
}
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        const fileWriter = fs.writeFileSync(fileName, data)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
}

function getProjectInfo () {
 inquirer.prompt([
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
    {
        type: 'list',
        message: 'Select your license',
        name: 'license',
        choices: [
            'MIT',
            'GNU',
        ],
    },
    {
        type: 'input',
        message: questions[6],
        name: 'gitHub'
    },
    {
        type: 'input',
        message: questions[7],
        name: 'eMail',
    }
    ])
    .then((response) => {
        projectInfo = 
        `Project Title: ${response.title} 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        Description: ${response.description} 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        Installation Instructions: ${response.install} 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        Contribution Instructions: ${response.contribution}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        Testing Instructions: ${response.test}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        GitHub Profile: https://github.com/${response.gitHub}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        E-Mail: ${response.eMail}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
        License: ${renderLicenseLink(response.license)}
        \n
        ${generateMarkdown(response.license)}`;

        writeToFile(filePath, projectInfo);
    });
}


// TODO: Create a function to initialize app
function init() {
    getProjectInfo();
    
}

// Function call to initialize app
init();
