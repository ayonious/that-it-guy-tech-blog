import React, { useContext } from "react";
import { TagDivWrapper } from "./styles";

import { Context } from "../../Context/ThemeContext";

interface TagData {
  tags: string[];
}

const TagsList = ({ tags }: TagData) => {
  const { theme } = useContext(Context);

  return (
    <div>
      {tags.map((tag) => (
        <TagDivWrapper theme={theme}>#{tag}</TagDivWrapper>
      ))}
    </div>
  );
};

export default TagsList;
