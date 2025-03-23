describe('template spec', () => {
  it('passes', () => {
    cy.intercept('GET', '**/bingo-items/office', {fixture: 'office.json'}).as('officeItems');

    cy.login('cypress', 'bingo');

    cy.url().should('eq', Cypress.config().baseUrl + '/bingo-board');

    cy.wait('@officeItems');

    cy.get('.board-title').should('contain', 'Bingo');

    cy.get('[data-cy="logout-button"]').should('exist');
  })
})
