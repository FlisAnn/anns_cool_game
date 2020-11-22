describe('User can see the game', () => {
  it('successfully renders', () => {
    cy.visit("http://localhost:3001");
    cy.get("#human").should("contain", "Stone, Rock or Paper?");
    cy.get("#computer").should("contain", "Stone, Rock or Paper?");
    // cy.get("button").should("contain", "Play");
  });
});