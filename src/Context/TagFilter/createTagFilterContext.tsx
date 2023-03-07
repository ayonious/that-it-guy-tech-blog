import React, { useReducer } from "react";

const createTagFilterContect = (
  reducer: any,
  actions: any,
  initialState: any
) => {
  const Context = React.createContext({
    state: {
      tags: [] as string[],
    },
    addTag: (tag: string) => {},
    removeTag: (tag: string) => {},
    clearTags: () => {},
  });

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

export default createTagFilterContect;
