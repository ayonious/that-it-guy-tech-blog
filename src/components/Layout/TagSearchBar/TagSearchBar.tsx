import React, { useState } from "react";
import ReactTags, { Tag } from "react-tag-autocomplete";
import { SearchBarDivWrapper } from "./styles";

const TagSearchBar = () => {
  const [tags, setTags] = useState([] as Tag[]);
  const suggestions: Tag[] = [
    { id: 1, name: "js" },
    { id: 2, name: "react" },
    { id: 3, name: "nodejs" },
    { id: 4, name: "typescript" },
  ];

  return (
    <SearchBarDivWrapper>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={() => {}}
        handleAddition={() => {}}
      />
    </SearchBarDivWrapper>
  );
};

export default TagSearchBar;
