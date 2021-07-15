const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Clemson University";
    const employee = new Intern("Andrew Koster", 22, "andrewkoster@outlook.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Amdrew Koster", 22, "andrewkoster@outlook.com", "andrewkoster");
    expect(employee.getRole()).toBe(role);
  });