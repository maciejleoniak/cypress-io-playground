context('createNote', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('create note', () => {
      cy.get('.d-flex > a:nth-child(1)').click();
      cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
      cy.get('#password').type('fake');
      cy.get('#submit').click().should('be.visible');
      cy.wait(3000);
      
      cy.get('.active').click();
      cy.wait(3000);
    })})