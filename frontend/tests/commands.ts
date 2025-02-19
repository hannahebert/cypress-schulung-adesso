/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (benutzername: string, password: string): void => {
  cy.visit('');

  cy.get('[data-cy="username"]')
    .type(benutzername, {log: false});
  cy.get('[data-cy="password"]')
    .type(password, {log: false});

  cy.get('[data-cy="submit-button"]').click();

  cy.get('.header-container', {timeout: 10000})
    .find('button')
    .should('exist');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
namespace Cypress {
  interface Chainable {
    login(email: string, password: string): void
  }
}
