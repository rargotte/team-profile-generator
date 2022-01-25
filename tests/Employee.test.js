const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should instantiate Employee class", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });

    it("Should instantiate Employee with name Regulo", () => {
        const newEmployee = new Employee("Regulo");
        expect(newEmployee.name).toBe("Regulo");
    });

    it("Should instantiate Employee with id 123", () => {
        const newEmployee = new Employee("Regulo", "123");
        expect(newEmployee.id).toBe("123");
    });

    it("Should instantiate Employee with email email@dom.com", () => {
        const newEmployee = new Employee("Regulo", "123", "email@dom.com");
        expect(newEmployee.email).toBe("email@dom.com");
    });

    describe("getName", () => {
        it("Should return the name", () => {
            const newEmployee = new Employee("Regulo");
            expect(newEmployee.getName()).toBe("Regulo");
        });
    });
        
    describe("getId", () => {
        it("Should return the ID", () => {
            const newEmployee = new Employee("Regulo", "123");
            expect(newEmployee.getId()).toBe("123");
        });
    });
        
    describe("getEmail", () => {
        it("Should return the email", () => {
            const newEmployee = new Employee("Regulo", "123", "email@dom.com");
            expect(newEmployee.getEmail()).toBe("email@dom.com");
        });
    });
        
    describe("getRole", () => {
        it("Should return Employee", () => {
            const newEmployee = new Employee("Regulo", "123", "email@dom.com");
            expect(newEmployee.getRole()).toBe("Employee");
        });
    });
    
});