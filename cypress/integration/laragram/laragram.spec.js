const yourFixturePath = 'croc.jpg';

describe('sanity check', () => {
  it('the title should match', () => {
    cy.visit('/');

    cy.contains('Laragram');
  });
});

describe('Authorised user', () => {

  // runs before each test in the block
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#email').type('demo@gmail.com')
    cy.get('#password').type('123456')
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
     cy.contains('Laragram')
  })

  //log in, add file to feed, and log out
  it('Add photo to feed', () => {
    cy.get('input[type="file"]').invoke('show')
      .click({force: true})
      .attachFile(yourFixturePath)
      .click({force: true})
    cy.contains('Next').click()
    cy.get('.description-container')
      .type("hello, is it me you're looking for?")
    cy.contains('Share').click()
    cy.visit('/')
  });
});

