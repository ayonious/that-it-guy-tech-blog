const React = require('react');

module.exports = {
  Link: jest.fn().mockImplementation(
    ({ to, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
}; 