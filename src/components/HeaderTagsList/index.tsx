import React, { useContext } from "react";
import Select from "react-select";

import { Context as TagFilterContext } from "../../Context/TagFilter/TagFilterContext";
import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import { HeaderTagsWrapper, CustomSelectStyles } from "./styles";
import useTags from "../../Hooks/useTags";

const HeaderTagsList = () => {
  const {
    state: { theme },
  } = useContext(ThemeContext);

  const {
    state: { tags },
    removeTag,
    addTag,
    clearTags,
  } = useContext(TagFilterContext);

  const allTags: string[] = useTags() || [];

  return (
    <HeaderTagsWrapper>
      <Select
        aria-label="Post Filter by Tag"
        styles={CustomSelectStyles(theme)}
        closeMenuOnSelect={false}
        isMulti
        placeholder={"Filter By Tags"}
        value={tags.map((tag) => ({ label: tag, value: tag }))}
        options={allTags.map((tag) => ({ label: tag, value: tag }))}
        onChange={(items, lastEvent) => {
          if (lastEvent.action === "select-option") {
            addTag(lastEvent.option.value);
          }
          if (lastEvent.action === "remove-value") {
            removeTag(lastEvent.removedValue.value);
          }
          if (lastEvent.action === "clear") {
            clearTags();
          }
        }}
      />
    </HeaderTagsWrapper>
  );
};

export default HeaderTagsList;
