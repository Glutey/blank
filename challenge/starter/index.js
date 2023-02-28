const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
  {
    title: "input",
    name: "title",
    message: "What is the title of your project?'", 
  },
  {
    title: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    title: "input",
    name: "installation",
    message: "Please provide installation instructions for your project:", 
  },
  {
    title: "input",
    name: "usage",
    message: "Please provide usage instructions for your project:", 
  },
  {
    title: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project:", 
  },
  {
    title: "input",
    name: "tests",
    message: "Please provide test instructions for your project:", 
  },
  {
    title: "input",
    name: "license",
    message: "Please choose a license for your project:'", 
  },
  {
    title: "input",
    name: "github",
    message: "What is your GitHub username?", 
  },
  {
    title: "input",
    name: "email",
    message: "What is your email address?", 
  },
  // {
  //   title: "input",
  //   name: "opinion",
  //   message: "do you like me?", 
  // },
];

// function to write README file
function writeToFile(fileName, data) { //create a file for this to put into this function so that is will render
  generateMarkdown(fs.writeFile(fileName, data, (err) => { // same as above
      if (err) {
        console.log(err);
        return;
      }
      console.log(`README.md file has been generated in this directory`);
    }));
  }
  // you're gong to run generateMarkdown here, and THEN save it to some file (using fs.writeFile)...
  // import generateMarkdown from "./utils/generateMarkdown";


// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
      // Use user feedback for... whatever!!
      // console.log("Your answers object looks like the following \n\n", answers);
     
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}


// function call to initialize program
init();