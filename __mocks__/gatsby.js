const React = require('react')

module.exports = {
  Link: jest.fn().mockImplementation(
    ({ to, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
} 