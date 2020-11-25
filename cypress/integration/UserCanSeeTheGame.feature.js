describe('Human can see the game', () => {
  it('successfully renders', () => {
    cy.visit("http://localhost:3001");
    cy.get("#human").should("contain", "Rock, Paper or Scissors?");
    cy.get("#computer").should("contain", "Rock, Paper or Scissors?");
    // cy.get("button").should("contain", "Play");
  });
});