import React from "react";
import { TagDivWrapper } from "./styles";

import ThemeContext from "../../Context/ThemeContext";

interface TagData {
  tags: string[];
}

const TagsList = ({ tags }: TagData) => {
  return (
    <div>
      {tags.map((tag) => (
        <ThemeContext.Consumer>
          {({ theme }) => <TagDivWrapper theme={theme}>#{tag}</TagDivWrapper>}
        </ThemeContext.Consumer>
      ))}
    </div>
  );
};

export default TagsList;
