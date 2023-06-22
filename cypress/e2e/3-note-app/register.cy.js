context('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('pop up click', () => {
    cy.get('#theme-toggle-button').click()

  })

  it('sign up', () => {
  cy.get('a[href="/signup"] button.btn.btn-primary').click();
})






})

