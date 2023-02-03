describe("Blog Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/blogs/js-throttling-debounce");
  });

  it("Basic Elements are there", () => {
    cy.contains("That IT Guy");
    cy.contains("Personal Tech Blog");
    cy.contains("This is an opensource project you can find the source code in");
  });

  it("Theme Changes", () => {
    cy.contains('🌜').click({force: true});
    cy.contains('🌞').click({force: true});
    cy.contains('🌜');
  });
});
