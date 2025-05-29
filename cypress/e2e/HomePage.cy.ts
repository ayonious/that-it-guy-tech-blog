/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000").wait(2000); //waiting long enough for all page to load
  });

  it("Basic Elements are there", () => {
    cy.contains("That IT Guy");
    cy.contains("Personal Tech Blog");
    cy.contains("Filter By Tags");
    cy.contains("Read More");
    cy.contains("This is an opensource project you can find the source code in");
  });

  it("Theme Changes", () => {
    cy.contains('🌜').click({force: true});
    cy.contains('🌞').click({force: true});
    cy.contains('🌜');
  });

  it("Filter By Tags Work", () => {
    cy.contains('Filter By Tags').click({force: true});
    cy.contains('oop').click({force: true});
    cy.contains('Is Js OOP?');
  });

  it("Home Page to Blog Post Navigation Works", () => {
    cy.contains('Filter By Tags').click({force: true});
    cy.contains('oop').click({force: true});
    cy.contains('Is Js OOP?');
    cy.contains('Read More').click({force: true});
    cy.contains('But js creates this objects through prototypes.');
    cy.contains('That IT Guy').click({force: true});
    cy.contains('But js creates this objects through prototypes.').should('not.exist');
  });
}); 