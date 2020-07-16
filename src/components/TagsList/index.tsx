import React, { useContext } from "react";
import { TagDivWrapper } from "./styles";

import { Context } from "../../Context/ThemeContext";

interface TagData {
  tags: string[];
  addFilter: any;
}

const TagsList = (props: TagData) => {
  const { tags, addFilter } = props;
  const {
    state: { theme },
  } = useContext(Context);

  return (
    <div>
      {tags.map((tag, index) => (
        <TagDivWrapper key={index} theme={theme} onClick={() => addFilter(tag)}>
          #{tag}
        </TagDivWrapper>
      ))}
    </div>
  );
};

export default TagsList;