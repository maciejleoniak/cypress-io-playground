context('deleteNote', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('delete 1th note', () => {
    cy.get('.d-flex > a:nth-child(1)').click();
    cy.get('#email').type('fake@email.com').should('have.value', 'fake@email.com');
    cy.get('#password').type('fake');
    cy.get('#submit').click().should('be.visible');
    // wait to log in
    cy.wait(3000);
    cy.get('.active').click();

    // wait for fetch all notes
    cy.wait(3000);

    // delete 1th note
    cy.get('div.card:nth-child(1) > div:nth-child(1) > a:nth-child(4) > button:nth-child(1)').click();

  })
})



