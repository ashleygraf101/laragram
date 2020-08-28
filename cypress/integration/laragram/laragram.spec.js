const yourFixturePath = 'croc.jpg';

describe('initial check', () => {
  it('the title should match', () => {
    cy.visit('/');

    cy.contains('Laragram');
  });
});

describe('Authorised user journeys', () => {

  // runs before each test in the block
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.contains('Log In').click()
    cy.visit('/')
  })


  afterEach(() => {
    cy.contains('Demo').click()
    cy.contains('Logout').click()
    cy.contains('Laragram')
  })

  //log in and log out
  it('Logs in and logs out', () => {
    cy.location('pathname').should('eq', '/')
  })

  //like a picture
  it('Like a picture', () => {
    cy.location('pathname').should('eq', '/')
    cy.get('.details').find(".fa-heart", {force: true}).first().click()
  })

  //log in, add file to feed, and log out
  // it('Add photo to feed', () => {
  //   cy.location('pathname').should('eq', '/')
  //   cy.get('input[type="file"]').invoke('show')
  //     .click({force: true})
  //     .attachFile(yourFixturePath)
  //     .click({force: true})
  //   cy.contains('Next').click()
  //   cy.get('.description-container')
  //     .type("hello, is it me you're looking for?")
  //   cy.contains('Share').click()
  //   cy.visit('/')
  // });
});

