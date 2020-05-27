import React, { useState } from "react";
import { CodeDivWrapper, CopyButtonWrapper } from "./styles";

const witeInClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const changeTextTemporarily = (changeText) => {
  changeText("Copied!");
  setTimeout(() => changeText("Copy"), 1000);
};

const CopyButton = (props) => {
  const [text, changetext] = useState("copy");
  return (
    <CopyButtonWrapper
      onClick={() => {
        props.onCopy();
        changeTextTemporarily(changetext);
      }}
    >
      <span>{text}</span>
    </CopyButtonWrapper>
  );
};

let isString = (inp) => typeof inp === "string";

const getCodeText = (children) => {
  let current = children;
  while (!isString(current)) {
    current = current.props.children;
  }
  return current;
};

const CodeWrapper = ({ children }) => {
  // a hacky way to getting the code part
  const codeText = getCodeText(children);

  return (
    <CodeDivWrapper>
      <CopyButton onCopy={() => witeInClipboard(codeText)} />
      {children}
    </CodeDivWrapper>
  );
};

export default CodeWrapper;
