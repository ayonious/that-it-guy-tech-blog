import React from "react";

import createTagFilterContext from "./createTagFilterContext";

interface ContextProps {
  tags: string[];
}

const FilterTagReducer = (
  state: ContextProps,
  action: { type: string; tag: string }
) => {
  switch (action.type) {
    case "add":
      if (state.tags.includes(action.tag)) {
        return state;
      }
      return {
        tags: state.tags.concat(action.tag),
      };
    case "remove":
      return {
        tags: state.tags.filter((tag) => tag !== action.tag),
      };
    case "clear":
      return {
        tags: [],
      };
    default:
      return state;
  }
};

const addTag = (dispatch: any) => {
  return (tag: string) => {
    dispatch({ type: "add", tag });
  };
};

const removeTag = (dispatch: any) => {
  return (tag: string) => {
    dispatch({ type: "remove", tag });
  };
};

const clearTags = (dispatch: any) => {
  return (tag: string) => {
    dispatch({ type: "clear", tag });
  };
};

export const { Context, Provider } = createTagFilterContext(
  FilterTagReducer,
  { addTag, removeTag, clearTags },
  {
    tags: [],
  }
);
