describe('Rock, Paper and Scissors', () => {
  beforeEach(() => {
    cy.visit("/");
  });
    it('Human can choose Rock', () => {
      cy.get("#humanRock").click();
    });

    it('Human can choose Paper', () => {
      cy.get("#humanPaper").click();
    });

    it('Human can choose Scissors', () => {
      cy.get("#humanScissors").click();
    });



    it('Human can play again', () => {
      cy.get("#button").should('contain', "Play again");
    });
});