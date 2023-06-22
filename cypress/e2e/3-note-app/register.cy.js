context('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('sign up', () => {
    cy.get('a[href="/signup"] button.btn.btn-primary').click();
    cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
    cy.get('#password').type('fake').should('have.value', 'fake');
    cy.get('#submit').click();
  });
});
