import React, { useReducer } from "react";
import { darkTheme } from "./ThemeEnums";

export default (reducer: any, actions: any, initialState: any) => {
  const Context = React.createContext({
    state: {
      theme: darkTheme,
    },
    changeTheme: () => {},
  });

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
