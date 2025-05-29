const React = require('react')

const mockTheme = {
  mainWhite: '#ffffff',
  mainBlack: '#000000',
  mainGrey: '#efefef',
  mainBlue: '#0000ff'
}

const mockState = {
  theme: mockTheme
}

const mockDispatch = jest.fn()

module.exports = {
  Context: React.createContext({ state: mockState, dispatch: mockDispatch }),
  Provider: ({ children }) => {
    return React.createElement(React.Fragment, null, children)
  }
} 