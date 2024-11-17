# Bingo Test mit Custom Commands

Lagere den Login Code in ein Custom Commands aus:

## Schritte:

1. Erstelle ein neues Command `login` in `frontend/cypress/support/commands.ts`.

    ```typescript
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
       // ...
    });
    ```

2. Nutze den Command in deinem Test.
