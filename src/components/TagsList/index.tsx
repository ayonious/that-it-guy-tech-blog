import React, { useContext } from "react";

import { Context as ThemeContext } from "../../Context/Theme/ThemeContext";
import { Context as TagFilterContext } from "../../Context/TagFilter/TagFilterContext";
import { TagDivWrapper, TagsDivWrapper } from "./styles";

interface TagData {
  tags: string[];
}

const TagsList = (props: TagData) => {
  const { tags } = props;

  const {
    state: { theme },
  } = useContext(ThemeContext);

  const { addTag } = useContext(TagFilterContext);

  return (
    <TagsDivWrapper data-testid="tags">
      {tags.map((tag, index) => (
        <TagDivWrapper
          key={index}
          theme={theme}
          onClick={() => addTag(tag)}
          data-testid={`tag-${tag}`}
        >
          #{tag}
        </TagDivWrapper>
      ))}
    </TagsDivWrapper>
  );
};

export default TagsList;
