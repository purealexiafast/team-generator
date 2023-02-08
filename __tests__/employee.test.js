
const Employee = require("../lib/Employee")


describe("Employee", () => {
    test("should create employee class", () => {
        const e = new Employee()
        expect(typeof e).toBe("object")
    })

    test("should set employee name", () => {
        const name = "Alex"
        const e = new Employee(name)
        expect(e.name).toBe(name)
    })

    test("should set employee id", () => {
        const name = "Alex"
        const id = 4
        const e = new Employee(name, id)
        expect(e.id).toBe(id)
    })


    test("should set employee email", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const e = new Employee(name, id, email)
        expect(e.email).toBe(email)
    })

    test("getName should return name", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const e = new Employee(name, id, email)
        expect(e.getName()).toBe(name)
    })
})


