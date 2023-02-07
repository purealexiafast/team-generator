const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)  //passing Employee name, id and email setting to manager
        this.officeNumber = officeNumber //setting officeNumber
    }

    getofficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager 