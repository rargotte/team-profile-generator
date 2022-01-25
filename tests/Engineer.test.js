const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should instantiate Engineer class", () => {
        const newEngineer = new Engineer();
        expect(typeof(newEngineer)).toBe("object");
    });

    it("Should instantiate Engineer with name Regulo", () => {
        const newEngineer = new Engineer("Regulo");
        expect(newEngineer.name).toBe("Regulo");
    });

    it("Should instantiate Engineer with id 123", () => {
        const newEngineer = new Engineer("Regulo", "123");
        expect(newEngineer.id).toBe("123");
    });

    it("Should instantiate Engineer with email email@dom.com", () => {
        const newEngineer = new Engineer("Regulo", "123", "email@dom.com");
        expect(newEngineer.email).toBe("email@dom.com");
    });

    it("Should instantiate Engineer with github userid", () => {
        const newEngineer = new Engineer("Regulo", "123", "email@dom.com", "userid");
        expect(newEngineer.githubID).toBe("userid");
    });

    describe("getName", () => {
        it("Should return the name", () => {
            const newEngineer = new Engineer("Regulo");
            expect(newEngineer.getName()).toBe("Regulo");
        });
    });
        
    describe("getId", () => {
        it("Should return the ID", () => {
            const newEngineer = new Engineer("Regulo", "123");
            expect(newEngineer.getId()).toBe("123");
        });
    });
        
    describe("getEmail", () => {
        it("Should return the email", () => {
            const newEngineer = new Engineer("Regulo", "123", "email@dom.com");
            expect(newEngineer.getEmail()).toBe("email@dom.com");
        });
    });

    describe("getGitHub", () => {
        it("Should return the github userid", () => {
            const newEngineer = new Engineer("Regulo", "123", "email@dom.com", "userid");
            expect(newEngineer.getGithubID()).toBe("userid");
        });
    });
        
    describe("getRole", () => {
        it("Should return Engineer", () => {
            const newEngineer = new Engineer("Regulo", "123", "email@dom.com");
            expect(newEngineer.getRole()).toBe("Engineer");
        });
    });
    
});