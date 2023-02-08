const { describe } = require("yargs")



describe("Engineer", ()=>{
    test("should set employee github", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const github = "purealexiafast"
        const e = new Employee(name, id, email, github)
        expect(e.github).toBe(github)
    })

    test("getGithub() should return github", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const github = "purealexiafast"
        const e = new Employee(name, id, email, github)
        expect(e.getGithub()).toBe(github)
    })

    test("getRole() should return engineer", () => {
        const name = "Alex"
        const id = 4
        const email = "alexia@gmail.com"
        const github = "purealexiafast"
        const e = new Employee(name, id, email, github)
        expect(e.getRole()).toBe("Engineer")
    })
})

github // GitHub username
getGithub()
getRole() 
