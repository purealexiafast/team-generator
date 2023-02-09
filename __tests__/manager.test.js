const Manager = require("../lib/Manager")



describe("Manager", ()=>{
    test("should set employee office number", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const officenumber = "12345"
        const e = new Manager(name, id, email, officenumber)
        expect(e.officeNumber).toBe(officenumber)
    })

    test("getRole() should return intern", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const officenumber = "12345"
        const e = new Manager(name, id, email, officenumber)
        expect(e.getRole()).toBe("Manager")
    })
})