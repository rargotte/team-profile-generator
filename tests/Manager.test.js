const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should instantiate Manager class", () => {
        const newManager = new Manager();
        expect(typeof(newManager)).toBe("object");
    });

    it("Should instantiate Manager with name Regulo", () => {
        const newManager = new Manager("Regulo");
        expect(newManager.name).toBe("Regulo");
    });

    it("Should instantiate Manager with id 123", () => {
        const newManager = new Manager("Regulo", "123");
        expect(newManager.id).toBe("123");
    });

    it("Should instantiate Manager with email email@dom.com", () => {
        const newManager = new Manager("Regulo", "123", "email@dom.com");
        expect(newManager.email).toBe("email@dom.com");
    });

    it("Should instantiate Manager with phone number 11-11-11-11", () => {
        const newManager = new Manager("Regulo", "123", "email@dom.com", "11-11-11-11");
        expect(newManager.officeNumber).toBe("11-11-11-11");
    });

    describe("getName", () => {
        it("Should return the name", () => {
            const newManager = new Manager("Regulo");
            expect(newManager.getName()).toBe("Regulo");
        });
    });
        
    describe("getId", () => {
        it("Should return the ID", () => {
            const newManager = new Manager("Regulo", "123");
            expect(newManager.getId()).toBe("123");
        });
    });
        
    describe("getEmail", () => {
        it("Should return the email", () => {
            const newManager = new Manager("Regulo", "123", "email@dom.com");
            expect(newManager.getEmail()).toBe("email@dom.com");
        });
    });

    describe("getOfficeNumber", () => {
        it("Should return the Office Number 11-11-11-11", () => {
            const newManager = new Manager("Regulo", "123", "email@dom.com", "11-11-11-11");
            expect(newManager.getOfficeNumber()).toBe("11-11-11-11");
        });
    });
        
    describe("getRole", () => {
        it("Should return Manager", () => {
            const newManager = new Manager("Regulo", "123", "email@dom.com");
            expect(newManager.getRole()).toBe("Manager");
        });
    });
    
});