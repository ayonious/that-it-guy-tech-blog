import React, { useContext } from "react";
import {
  FiltersTextWrapper,
  TagDivWrapper,
  CrossButtonWrapper,
  HeaderTagsWrapper,
} from "./styles";

import { Context } from "../../Context/ThemeContext";

interface TagData {
  tags: string[];
  removeFilter: any;
}

const HeaderTagsList = (props: TagData) => {
  const { tags, removeFilter } = props;
  const {
    state: { theme },
  } = useContext(Context);

  if (!tags.length) {
    return <></>;
  }

  return (
    <HeaderTagsWrapper>
      <FiltersTextWrapper> Filters: </FiltersTextWrapper>
      {tags.map((tag, index) => (
        <TagDivWrapper key={index} theme={theme}>
          <CrossButtonWrapper onClick={() => removeFilter(tag)}>
            x
          </CrossButtonWrapper>
          <span>{tag}</span>
        </TagDivWrapper>
      ))}
    </HeaderTagsWrapper>
  );
};

export default HeaderTagsList;
