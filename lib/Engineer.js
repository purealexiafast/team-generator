const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)  //passing Employee name, id and email setting to engineer
        this.github = github 
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer