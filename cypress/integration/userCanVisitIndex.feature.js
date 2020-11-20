describe('User can visit Index', () => {
  it('successfully renders', () => {
    cy.visit("http://localhost:3001");
    cy.get("#header").should("contain", "Rules");
    cy.get("#footer").should("contain", "Made with React 17.0.1");
  });
});
