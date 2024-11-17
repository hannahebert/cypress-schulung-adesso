# Testfälle für Request Stubbing

Erweitere den bingo Test um Request Stubbing.

## Testfall 1

1. Intercepte den GET-Request für das Office Bingo.
2. Ersetze in der Response alle Feldertexte.
3. Logge dich ein.
4. Teste, ob alle Felder den ersetzten Wert beinhalten und nicht selected sind.

## Testfall 2

1. Intercepte den GET-Request für das Vacation Bingo.
2. Ersetze die Response mit dem Fixture `vacation_bingo`.
3. Logge dich ein.
4. Teste, ob alle Felder den '&&&' enthalten.

## Tipps

- [Cypress Intercept Dokumentation](https://docs.cypress.io/api/commands/intercept)