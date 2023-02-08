const inquirer = require("inquirer") 
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const employeeList = []

const managerQues = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the manager?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the id of the manager?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of the manager?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is the office number of the manager?"
    },

]

const engineerQues = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the id of the engineer?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of the engineer?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Git Hub of the engineer?"
    },

]

function managerQuestions (){
    inquirer.prompt(managerQues)
    .then(({name, id, email, officenumber})=>{
        console.log(answers)
        const manager = new Manager(name, id, email, officenumber)
        console.log(manager)
        employeeList.push(manager)
        mainQuestions()
    })
}

function addEngineer(){
    inquirer.prompt(engineerQues)
    .then(({name, id, email, github})=>{
        console.log(answers)
        const engineer = new Engineer(name, id, email, github)
        console.log(engineer)
        employeeList.push(engineer)
        mainQuestions()
    })
}

//add intern function & array of questions
//loop over array, employee list and create an individualized card for each one of them
//put cards into html to write onto page

function mainQuestions(){
    inquirer.prompt({
        type: "list",
        name: "main",
        message: "Which employee would you like to add?",
        choices: ["Add Engineer", "Add Intern", "Generate Team"]
    }) 
    .then(({main})=>{
        switch(main){
            case "Add Engineer":
                addEngineer()
                break 
            case "Add Intern":
                addIntern()
                break
            case "Generate Team":
                generateTeam()
                break
        }
    })
}

managerQuestions()