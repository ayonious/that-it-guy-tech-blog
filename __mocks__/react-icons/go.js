const React = require('react');

module.exports = {
  GoRepo: jest.fn().mockImplementation(() => React.createElement('span', null, 'GithubIcon')),
}; 