describe('mit Copilot generiert', () => {
  describe('v1: Login', () => {
    it('should login successfully', () => {
      cy.visit('/login'); // Besuche die Login-Seite

      // Fülle das Login-Formular aus
      cy.get('input[name=username]').type('deinBenutzername');
      cy.get('input[name=password]').type('deinPasswort');
      cy.get('button[type=submit]').click();

      // Überprüfe, ob die URL nach dem Login die Dashboard-Seite enthält
      cy.url().should('include', '/dashboard');

      // Optional: Überprüfe, ob ein spezifisches Element auf der Dashboard-Seite sichtbar ist
      cy.get('.dashboard-element').should('be.visible');
    });
  });

  describe('v2:Login Test', () => {
    beforeEach(() => {
      cy.visit('/login'); // Besuche die Login-Seite vor jedem Test
    });

    it('should login successfully', () => {
      // Stubbe den API-Aufruf für den Login
      cy.intercept('POST', '/api/login', {
        statusCode: 200,
        body: {token: 'fakeToken'}
      }).as('loginRequest');

      // Fülle das Login-Formular aus
      cy.get('[data-cy=username]').type('deinBenutzername');
      cy.get('[data-cy=password]').type('deinPasswort');
      cy.get('[data-cy=submit-button]').click();

      // Warte auf den API-Aufruf und überprüfe die URL nach dem Login
      cy.wait('@loginRequest');
      cy.url().should('include', '/dashboard');

      // Optional: Überprüfe, ob ein spezifisches Element auf der Dashboard-Seite sichtbar ist
      cy.get('[data-cy=dashboard-element]').should('be.visible');
    });
  });

  describe('v3:Login Test', () => {
    beforeEach(() => {
      cy.visit('/login'); // Besuche die Login-Seite vor jedem Test
    });

    it('should login successfully', () => {
      // Fülle das Login-Formular aus
      cy.get('input[name=username]').type('cypress');
      cy.get('input[name=password]').type('bingo');
      cy.get('button[type=submit]').click();

      // Überprüfe, ob die URL nach dem Login die Dashboard-Seite enthält
      cy.url().should('include', '/dashboard');

      // Optional: Überprüfe, ob ein spezifisches Element auf der Dashboard-Seite sichtbar ist
      cy.get('.dashboard-element').should('be.visible');
    });
  });
});
