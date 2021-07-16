const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "4231";
    const employee = new Manager("Matt Johnson", 2, "mattjohnson@gmail.com", officeNum);
    expect(employee.officeNum).toBe(officeNum);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Matt Johnson", 2, "mattjohnson@gmail.com", "mattjohnson");
    expect(employee.getRole()).toBe(role);
  });