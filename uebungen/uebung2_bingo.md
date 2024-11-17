# Bingo Test

## Schritte:

1. Erstellen einen neuen Test in `frontend/cypress/integration/bingo.cy.ts`.

2. Navigiere zu `http://localhost:4200/`.
3. Stelle sicher, dass du dich auf der Login-Seite befindest.
4. Logge dich ein (Name: `cypress` & Passwort: `bingo`).
5. Stelle sicher, dass der Login funktioniert hat.

6. Stelle sicher, dass die Erfolgsmeldung nicht angezeigt wird.
7. Klicke 5 Bingo-Felder (horizontal oder vertikal).
8. Stelle sicher, dass die Erfolgsmeldung angezeigt wird.

9. Wähle das Vacation Bingo aus.
10. Stelle sicher, dass die Erfolgsmeldung nicht mehr angezeigt wird und keine Felder mehr ausgewählt sind.

## Tipps:
- Nutze die Commands `get`, `find` und `contains`.
- Versuche die Selektoren nach [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) zu wählen.
- Verhindere, dass Passwort und Username in den Logs vorkommen. [Mehr dazu hier](https://docs.cypress.io/api/commands/type).
- Lagere `baseUrl` in `cypress.config.ts` aus.