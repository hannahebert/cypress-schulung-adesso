## Ablauf ##

### Intro + Testing ###

| Thema         | Details |
|---------------|---------|
| Intro         | Folien  |
| Vorstellung   | Folien  |
| Anfangsfragen | Menti   |
| Testing Intro | Folien  |

### Cypress Intro

| Thema                          | Wo                                    |
|--------------------------------|---------------------------------------|
| Cypress Intro                  | Folien                                |
| `npm i --save-dev cypress`     | In console ausführen oder über README |
| `npx cypress open`             | In console ausführen oder über README |
| Launchpad erklären             | Launchpad                             |
| Test Runner zeigen             | Testrunner UI                         |
| Test: Login                    | Testrunner UI                         |
| Angelegte Dateien zeigen       | Intellij                              |
| App zeigen                     | Browser                               |
| Testaufbau zeigen              | Folien                                |
| Login Test: Visit + Assertions | Intellij dann Testrunner              |

```
describe('login', () => {
  it('should successfully login', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Bingo');
  })
})
```

| Thema                                                         | Wo                           |
|---------------------------------------------------------------|------------------------------|
| Commands vs. Assertions                                       | Folien                       |
| Commands -> Query/Non-Query                                   | Folien                       |
| Chain of Commands                                             | Folien                       |
| Verbesserung Login Test > type, click mit Selector Playground | Intellij, SelectorPlayground |

```
describe('login', () => {
  it('should successfully login', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Bingo');
    cy.get('[data-cy="login-form"]').find('h3').should('contain', 'Anmeldung');

    cy.get('[data-cy="username"]').type('cypress');
    cy.get('[data-cy="password"]').type('bingo');

    cy.get('[data-cy="submit-button"]').click();
  })
})
```

### Übung 1: Login Test ###

```
cy.get('[data-cy="login-form"]')
    .find('h3')
    .should('contain', 'Anmeldung');
```

### Cypress Theorie ###

| Thema                   | Wo                    |
|-------------------------|-----------------------|
| Find vs get vs contains | Folien, dann Intellij |

```
cy.get('[data-cy="login-form"]')
    .find('h3')
    .should('contain', 'Anmeldung');
```

| Thema                                             | Wo       |
|---------------------------------------------------|----------|
| Selektoren (Beispiel wie bei find, contains, get) | Intellij |
| Langsamer tippen                                  | Intellij |

```cy.get('[data-cy="username"]').type('cypress', {delay: 1000});```

| Thema                           | Wo       |
|---------------------------------|----------|
| Passwort in den Logs ausblenden | Intellij |

```cy.get('[data-cy="password"]').type('cypress', {log: false});```

| Thema                                   | Wo            |
|-----------------------------------------|---------------|
| Auslagern base URL  (cypress.config.ts) | Intellij      |
| Config in der Desktop App anschauen     | Testrunner UI |
| `npx cypress run`                       | Intellij      | 
| `npx cypress run --browser firefox`     | Intellij      |
| Fehlerfall: Screenshot wird erstellt    | Intellij      |

### Übung 2: Bingo Feld ###

| Thema                                                           | Wo                      |
|-----------------------------------------------------------------|-------------------------|
| Test Click Bingo Feld (Aus login kopieren, Selector Playground) | Intellij, Testrunner UI |
| Auslagern des Login Commands                                    | Folien, Intellij        |
| Retry Logic                                                     | Folien                  |
| Best Practices                                                  |                         |
| Abschluss                                                       |                         |