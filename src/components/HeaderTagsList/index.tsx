import React, { useContext } from "react";
import Select from "react-select";

import { Context as TagFilterContext } from "../../Context/TagFilter/TagFilterContext";
import { Context } from "../../Context/Theme/ThemeContext";
import { HeaderTagsWrapper, CustomSelectStyles } from "./styles";

const HeaderTagsList = ({ allTags }: { allTags: string[] }) => {
  const {
    state: { theme },
  } = useContext(Context);

  const {
    state: { tags },
    removeTag,
    addTag,
    clearTags,
  } = useContext(TagFilterContext);

  return (
    <HeaderTagsWrapper>
      <Select
        styles={CustomSelectStyles(theme)}
        closeMenuOnSelect={false}
        isMulti
        placeholder={"Filter By Tags"}
        options={allTags.map((tag) => ({ label: tag, value: tag }))}
        onChange={(items, lastEvent) => {
          console.log(lastEvent);
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
