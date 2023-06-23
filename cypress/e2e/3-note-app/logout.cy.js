context('log out', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('log out', () => {
        cy.get('.d-flex > a:nth-child(1)').click();
        cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('#password').type('fake');
        cy.get('#submit').click();
        cy.wait(2500);
      
        // logout
        cy.get('#logout').click();



        
    });

})