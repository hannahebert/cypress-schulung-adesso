import {CyHttpMessages} from "cypress/types/net-stubbing";
import IncomingHttpRequest = CyHttpMessages.IncomingHttpRequest;
import {BingoField} from "../../src/app/model/bingo-field.data";

describe('Bingo', () => {

  it('should successfully login', () => {
    cy.intercept('GET', '**/bingo-items/office', (req: IncomingHttpRequest) => {
      req.continue((res) => {
          const fields = res.body;
          const changedFields: BingoField[] = fields.map((field: BingoField) => {
            return {...field, text: 'ERSETZT'};
          });
          res.send({...res, body: changedFields});
        }
      )
    }).as('officeItems');

    cy.login('cypress', 'bingo');

    cy.get('[data-cy="bingo-field"]').as('bingoFields');

    cy.get('@bingoFields')
      .eq(5)
      .click() // WIRD IMMER NUR EINMAL AUSGEFÜHRT
      .should('have.class', 'selected');

    cy.get('@bingoFields').eq(0).screenshot();

    cy.get('@bingoFields').eq(6).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(7).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(8).click().should('have.class', 'selected');
    cy.get('@bingoFields').eq(9).click().should('have.class', 'selected');

    /*    let numbers = [5, 6, 7, 8, 9];
        numbers.forEach(index => {
            cy.get('@bingoFields').eq(index).click().should('have.class', 'selected');
          });*/

    cy.get('[data-cy="winning-message"]').should('exist');
  })
})
