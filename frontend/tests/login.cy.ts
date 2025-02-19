describe('login', () => {
  it('should successfully login', () => {

    cy.visit('');

    cy.get('[data-cy="username"]')
      .type('cypress', { delay: 100 });
    cy.get('[data-cy="password"]')
      .type('bingo', { log: false });

    cy.get('[data-cy="submit-button"]').click();

    cy.get('.header-container')
      .contains('Logout');

    cy.get('.category-button-container')
      .find('button')
      .eq(1)
      .click()
  })
})
