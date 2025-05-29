/// <reference types="cypress" />

describe("Blog Posts Accessibility", () => {
  const blogPosts = [
    { slug: 'js-throttling-debounce', title: 'Throttle and Debounce', date: '2020-07-05' },
    { slug: 'js-promise', title: 'Js Promise', date: '2020-05-05' },
    { slug: 'react-debugging', title: 'React Debugging', date: '2020-04-25' },
    { slug: 'react-context-theme-change', title: 'Theme Change using React Context', date: '2020-04-21' },
    { slug: 'jquery-react', title: 'Jquery', date: '2020-04-20' },
    { slug: 'webpack-babel-101', title: 'Hello world on Webpack and babel', date: '2020-04-19' },
    { slug: 'publish-npm-package', title: 'Publishing your first npm package', date: '2020-04-12' },
    { slug: 'npm-yarn-link', title: 'Yarn/Npm Link', date: '2020-04-12' },
    { slug: 'js-buzzwords', title: 'JS programming buzzwords', date: '2020-04-02' },
    { slug: 'js-101', title: 'Js 101', date: '2019-08-14' }
  ];

  beforeEach(() => {
    cy.visit("http://localhost:9000").wait(2000);
  });

  describe("Should be able to visit each blog post directly", () => {
    blogPosts.forEach(post => {
      it(`${post.title} should be accessible directly`, () => {
        cy.visit(`http://localhost:9000/blogs/${post.slug}`).wait(2000);
        
        // Verify common elements are present
        cy.contains("That IT Guy").should('exist');
        cy.contains("Personal Tech Blog").should('exist');
        
        // Verify blog post specific elements
        cy.get('[class*="TemplateDivWrapper"]').should('exist'); // Main content wrapper
        cy.get('[class*="DateDivWrapper"]').should('exist'); // Date element
        cy.get('[class*="TitleDivWrapper"]').should('exist'); // Title element
        cy.get('[class*="ImageWrapper"]').should('exist'); // Image wrapper
        
        // Verify navigation works
        cy.contains("That IT Guy").click({force: true});
        cy.url().should('eq', 'http://localhost:9000/');
      });
    });
  });

  describe("Should have proper meta tags", () => {
    blogPosts.forEach(post => {
      it(`${post.title} should have proper meta tags`, () => {
        cy.visit(`http://localhost:9000/blogs/${post.slug}`).wait(2000);
        
        // Check basic meta tags
        cy.get('head title').should('exist');
        cy.get('meta[name="description"]').should('exist');
      });
    });
  });
}); 