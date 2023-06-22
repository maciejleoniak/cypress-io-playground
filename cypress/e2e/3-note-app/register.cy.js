context('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('pop up click', () => {
    cy.get('#theme-toggle-button').click()

  })
})

