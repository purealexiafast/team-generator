const Intern = require("../lib/Intern")



describe("Intern", ()=>{
    test("should set intern school", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const school = "Carleton"
        const e = new Intern(name, id, email, school)
        expect(e.school).toBe(school)
    })

    test("getSchool() should return school name", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const school = "Carleton"
        const e = new Intern(name, id, email, school)
        expect(e.getSchool()).toBe(school)
    })

    test("getRole() should return intern", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const school = "Carleton"
        const e = new Intern(name, id, email, school)
        expect(e.getRole()).toBe("Intern")
    })
})