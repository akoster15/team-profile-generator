const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "johnsmith";
    const employee = new Engineer("John Smith", 33, "johnsmith@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("John Smith", 33, "johnsmith@gmail.com", "johnsmith");
    expect(employee.getRole()).toBe(role);
  });