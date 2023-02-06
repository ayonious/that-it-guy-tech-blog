describe("Blog Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/blogs/js-throttling-debounce").wait(2000); //waiting long enough for all page to load;
  });

  it("Basic Elements are there for Blog post", () => {
    cy.contains("That IT Guy");
    cy.contains("Personal Tech Blog");
    cy.contains("This is an opensource project you can find the source code in");
  });

  it("Theme Changes in Blog post", () => {
    cy.contains('🌜').click({force: true});
    cy.contains('🌞').click({force: true});
    cy.contains('🌜');
  });
});
