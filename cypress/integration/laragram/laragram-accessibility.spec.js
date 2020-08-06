const yourFixturePath = 'croc.jpg';

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )
 
  cy.task('table', violationData)
}
 
describe('Login Page', () => {
  it('Visits the login page and logs in', () => {
    cy.visit('/login')
    cy.contains('Laragram')
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
 
describe('Home Page', () => {
  it('Visits the login page and logs in', () => {
    cy.visit('/login')
    cy.contains('Laragram')
    cy.get('#email')
      .type('demo@gmail.com')
      .should('have.value', 'demo@gmail.com')
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456')
    cy.contains('Log In')
      .click()
    cy.contains('Laravel')
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})

describe('Choose filter Page', () => {
  it('Add photo to feed', () => {
    cy.visit('/login')
    cy.contains('Laragram')
    cy.get('#email')
      .type('demo@gmail.com')
      .should('have.value', 'demo@gmail.com')
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456')
    cy.contains('Log In')
      .click()
    cy.contains('Laravel')
    cy.get('input[type="file"]').invoke('show')
      .click({force: true})
      .attachFile(yourFixturePath)
      .click({force: true})
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})


describe('Add description Page', () => {
  it('Add photo to feed', () => {
    cy.visit('/login')
    cy.contains('Laragram')
    cy.get('#email')
      .type('demo@gmail.com')
      .should('have.value', 'demo@gmail.com')
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456')
    cy.contains('Log In')
      .click()
    cy.contains('Laravel')
    cy.get('input[type="file"]').invoke('show')
      .click({force: true})
      .attachFile(yourFixturePath)
      .click({force: true})
    cy.contains('Next').click()
    cy.get('.description-container')
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})

