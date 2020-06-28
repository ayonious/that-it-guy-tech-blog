import React, { useReducer } from "react";
import { darkTheme } from "./ThemeEnums";

export default (reducer, actions, initialState) => {
  const Context = React.createContext({
    theme: darkTheme,
    changeTheme: (inp) => {},
  });

  const Provider = ({ children }) => {
    const [theme, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ theme, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
