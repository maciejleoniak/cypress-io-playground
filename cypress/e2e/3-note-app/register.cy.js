context('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('night/day view click', () => {
    cy.get('#theme-toggle-button').click();
    
  });

  // it('sign up', () => {
  //   cy.get('a[href="/signup"] button.btn.btn-primary').click();
  //   cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
  //   cy.get('#password').type('fake').should('have.value', 'fake');
  //   cy.get('#submit').click();
  // });
  it('log in', () => {
    cy.get('.d-flex > a:nth-child(1)').click();
    cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
    cy.get('#password').type('fake');
    cy.get('#submit').click();
    cy.get('.navbar-brand').click();
  });
  // it('create note', () => {
  //   cy.get('.d-flex > a:nth-child(1)').click();
  //   cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
  //   cy.get('#password').type('fake');
  //   cy.get('#submit').click();
  //   cy.get('.navbar-brand').click();
  // });
});
