const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should instantiate Intern class", () => {
        const newIntern = new Intern();
        expect(typeof(newIntern)).toBe("object");
    });

    it("Should instantiate Intern with name Regulo", () => {
        const newIntern = new Intern("Regulo");
        expect(newIntern.name).toBe("Regulo");
    });

    it("Should instantiate Intern with id 123", () => {
        const newIntern = new Intern("Regulo", "123");
        expect(newIntern.id).toBe("123");
    });

    it("Should instantiate Intern with email email@dom.com", () => {
        const newIntern = new Intern("Regulo", "123", "email@dom.com");
        expect(newIntern.email).toBe("email@dom.com");
    });

    it("Should instantiate Intern with school UNIWORLD", () => {
        const newIntern = new Intern("Regulo", "123", "email@dom.com", "UNIWORLD");
        expect(newIntern.school).toBe("UNIWORLD");
    });

    describe("getName", () => {
        it("Should return the name", () => {
            const newIntern = new Intern("Regulo");
            expect(newIntern.getName()).toBe("Regulo");
        });
    });
        
    describe("getId", () => {
        it("Should return the ID", () => {
            const newIntern = new Intern("Regulo", "123");
            expect(newIntern.getId()).toBe("123");
        });
    });
        
    describe("getEmail", () => {
        it("Should return the email", () => {
            const newIntern = new Intern("Regulo", "123", "email@dom.com");
            expect(newIntern.getEmail()).toBe("email@dom.com");
        });
    });

    describe("getSchool", () => {
        it("Should return the school", () => {
            const newIntern = new Intern("Regulo", "123", "email@dom.com", "UNIWORLD");
            expect(newIntern.getSchool()).toBe("UNIWORLD");
        });
    });
        
    describe("getRole", () => {
        it("Should return Intern", () => {
            const newIntern = new Intern("Regulo", "123", "email@dom.com");
            expect(newIntern.getRole()).toBe("Intern");
        });
    });
    
});