context('other', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('night/day view click', () => {
        cy.get('#theme-toggle-button').click();

    });

})