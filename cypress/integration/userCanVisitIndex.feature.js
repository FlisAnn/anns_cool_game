describe('User can visit Index', () => {
  it('successfully renders', () => {
    cy.visit("http://localhost:3001");
    cy.get("#topheader").should("contain", "Stone, Rock and paper");
    cy.get("#footer").should("contain", "Made with React 17.0.1");
    cy.get("#gamerules").should("contain", "Rules of the game");
  });
});
