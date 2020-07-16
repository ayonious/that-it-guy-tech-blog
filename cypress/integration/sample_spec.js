describe("Integration Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/blogs/js-throttling-debounce");
  });

  it("Blog page should have => 1.back button, 2.Dark Theme Text 3. Page Content", () => {
    // Buttons
    cy.contains("back to Home Page");

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
