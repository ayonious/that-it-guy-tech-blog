describe("Integration Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/blogs/js-throttling-debounce");
  });

  it("Blog page should have => 1.Page title 2.Dark Theme Text 3. Page Content", () => {
    // Head Title
    cy.contains("That IT Guy");

    // Sub Title
    cy.contains("Personal Tech Blog");
    
    // Theme
    cy.contains("Dark Theme");

    // Page Content
    cy.contains("Throttle");
    cy.contains("Source");

    // footer exists
    cy.contains(
      "This is an opensource project you can find the source code in"
    );
  });

  it("Blog page => test theme change", () => {
    cy.contains("Theme").click();
  });
});
