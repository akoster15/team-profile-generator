//Card for Engineer
const createEngineer= (Engineer) => {
  const {name, id, email, gitHub, role} = Engineer
  return `<div class = "column">
      <div class = "card">
          <div class = "cardContent">
              <div class = "cardHeader">
                  <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                      <h4 class = "cardName">${name}</h4>
                      <p class = "cardRole">${role}</p>
                  </div>
              </div>
              <div class="content text-center">
                  <div class = "column"> ID: ${id} </div>
                  <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                  <div class = "column"> GitHub Userame: <a href="https://github.com/${github}" target="_blank">${github}</a></div>
              </div>
          </div>
      </div>
  </div>`  
}

//Card for Manager 
const createManager = (Manager) => {
  const {name, id, email, number, role} = Manager
  return `<div class = "column">
      <div class = "card">
          <div class = "cardContent">
              <div class="cardHeader">
                  <div class = "cardHeaderContent text-center bg-gradient bg-dark text-white">
                      <h4 class = "cardName">${name}</h4>
                      <p class = "cardRole">${role}</p>
                  </div>
              </div>
              <div class="content text-center">
                  <div class = "column"> ID: ${id} </div>
                  <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                  <div class = "column"> Office Number: ${officeNum} </div>
              </div>
          </div>
      </div>
  </div>`  
}

//Card for Intern
const createIntern = (Intern) => {
  const {name, id, email, school, role} = Intern
  return `<div class = "column">
      <div class = "card">
          <div class = "cardContent">
              <div class = "cardHeader">
                  <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                      <h4 class = "cardName">${name}</h4>
                      <p class = "cardRole">${role}</p>
                  </div>
              </div>
              <div class="content text-center">
                  <div class = "column"> ID: ${id} </div>
                  <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                  <div class = "column"> School: ${school}</div>
              </div>
          </div>
      </div>
  </div>` 
}

exports.createEngineer=createEngineer
exports.createManager=createManager
exports.createIntern=createIntern