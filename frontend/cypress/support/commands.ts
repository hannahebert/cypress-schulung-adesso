// Stellt sicher, dass die TypeScript-Typen für Cypress in dieser Datei verfügbar sind.
/// <reference types="cypress" />

// Erweitert den Cypress Namensraum
declare namespace Cypress {
    interface Chainable {
        login(email: string, password: string): void;
    }
}

// Fügt das Cypress Command Login hinzu.
Cypress.Commands.add('login', (username: string,
                               password: string): void => {
    cy.visit('login');
    cy.get('[data-cy="username"]')
        .type('cypress', {log: false});
    cy.get('[data-cy="password"]')
        .type('bingo', {log: false});

    cy.get('[data-cy="submit-button"]')
        .click()
        .should('not.exist');

    cy.url()
        .should('eq', `${Cypress.config().baseUrl}/bingo-board`);

    cy.get('.board-title').should('have.text', 'Bingo');
});
