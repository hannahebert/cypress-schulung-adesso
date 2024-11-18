describe('Login', () => {
  it('should be successful', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('[data-cy="login-form"]')
      .should('exist');

    cy.get('[data-cy="username"]')
      .type('cypress');

    cy.get('[data-cy="password"]')
      .type('bingo');

    cy.get('[data-cy="submit-button"]')
      .click();

    cy.get('.header-container > button')
      .should('contain.text', 'Logout');
  })
})
