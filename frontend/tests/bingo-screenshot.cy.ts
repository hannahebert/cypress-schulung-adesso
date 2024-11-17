describe('Bingo', () => {
  it('should successfully login', () => {

    cy.visit('http://localhost:4200/');

    cy.get('[data-cy="username"]')
      .type('cypress');
    cy.get('[data-cy="password"]')
      .type('bingo', {log: false});

    cy.get('[data-cy="submit-button"]').click();

    cy.get('.header-container', {timeout: 10000})
      .find('button')
      .should('exist');

    cy.get('[data-cy="bingo-field"]').as('bingoFields');

    cy.get('@bingoFields').eq(5).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(6).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(7).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(8).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(9).click().should('have.class', 'selected');


    /*
      [5, 6, 7, 8, 9].forEach(index => {
        cy.get('@bingoFields').eq(index).click().should('have.class', 'selected');
      });
      */

    cy.get('[data-cy="winning-message"]').should('exist');

    cy.screenshot('[data-cy="winning-message"]');
  })
})
