const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const fs = require("fs")
const path = require("path")

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

const internQues = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the intern?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the id of the intern?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of the intern?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the school of attendance of the intern?"
    },

]

function managerQuestions() {
    inquirer.prompt(managerQues)
        .then(({ name, id, email, officenumber }) => {
            const manager = new Manager(name, id, email, officenumber)
            console.log(manager)
            employeeList.push(manager)
            mainQuestions()
        })
}

function addEngineer() {
    inquirer.prompt(engineerQues)
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github)
            console.log(engineer)
            employeeList.push(engineer)
            mainQuestions()
        })
}

function addIntern() {
    inquirer.prompt(internQues)
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school)
            console.log(intern)
            employeeList.push(intern)
            mainQuestions()
        })
}

//add intern function & array of questions
//loop over array, employee list and  an individualized card createfor each one of them
//put cards into html to write onto page

function writeToFile(html){
    fs.writeFileSync(path.join(process.cwd(), "./dist/generatedHtml.html"), html)
}

function generateCard(employee) {
    const role = employee.getRole()
    return `<div>
    <h1>${employee.getName()}</h1>
    <h2>${role}</h2>
    <h3> ID: ${employee.getId()}</h3>
    <h3> Email: ${employee.getEmail()}</h3>
    ${role === "Manager" ? `<h3>Office Number: ${employee.getofficeNumber()}</h3>`
            : role === "Engineer" ? `<h3>Github: ${employee.getGithub()}</h3>`
                : `<h3>School: ${employee.getSchool()}</h3>`}

</div>`
}

function generateTeam() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Information Generator</title>
        <link href="../styles/style.css" rel="stylesheet">
    </head>
    
    <body>
        <header>
            <h1 id="myteam">My Team</h1>
        </header>
        <main>
            <span class="divflex">
         ${employeeList.map(employee => generateCard(employee)).join("")}
            </span>
        </main>
    
    </body>
    
    </html>`
}



function mainQuestions() {
    inquirer.prompt({
        type: "list",
        name: "main",
        message: "Which employee would you like to add?",
        choices: ["Add Engineer", "Add Intern", "Generate Team"]
    })
        .then(({ main }) => {
            switch (main) {
                case "Add Engineer":
                    addEngineer()
                    break
                case "Add Intern":
                    addIntern()
                    break
                case "Generate Team":
                    writeToFile(generateTeam())
                    break
            }
        })
}

managerQuestions()