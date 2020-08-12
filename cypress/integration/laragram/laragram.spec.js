const yourFixturePath = 'croc.jpg';

describe('sanity check', () => {
  it('the title should match', () => {
    cy.visit('/');

    cy.title().should('include', 'Laragram');
  });
});

describe('Authorised user', () => {

  //login with the UI the first time
  it('Logs in users', () => {
      cy.visit('/login')

      cy.get('#email').type('demo@gmail.com')
      cy.get('#password').type('123456')
      cy.contains('Log In').click()
      cy.visit('/')
  })

  //login with the UI the first time
  it('Logs in and logs out', () => {
      cy.visit('/login')
      cy.get('#email').type('demo@gmail.com')
      cy.get('#password').type('123456')
      cy.contains('Log In').click()
      cy.visit('/')
      cy.location('pathname').should('eq', '/')
      cy.contains('Demo').click()
      cy.contains('Logout').click()
      cy.contains('Laragram')
  })

  //login with the DB after that
  it('Add photo to feed', () => {
    cy.visit('/login')

      cy.get('#email').type('demo@gmail.com')
      cy.get('#password').type('123456')
      cy.contains('Log In').click()
      cy.visit('/')
      cy.location('pathname').should('eq', '/')
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

