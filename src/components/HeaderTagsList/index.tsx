import React, { useContext } from "react";

import { Context } from "../../Context/ThemeContext";
import {
  CrossButtonWrapper,
  FiltersTextWrapper,
  HeaderTagsWrapper,
  TagDivWrapper,
} from "./styles";

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
