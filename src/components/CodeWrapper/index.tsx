import React, { FC, PropsWithChildren, useState } from "react";
import Highlight from "react-highlight.js";

import { CodeDivWrapper, CopyButtonWrapper } from "./styles";

const witeInClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const changeTextTemporarily = (changeText) => {
  changeText("Copied ✅");
  setTimeout(() => changeText("Copy 📋"), 1000);
};

const CopyButton = (props) => {
  const [text, changeText] = useState("Copy 📋");
  return (
    <CopyButtonWrapper
      onClick={() => {
        props.onCopy();
        changeTextTemporarily(changeText);
      }}
    >
      <span>{text}</span>
    </CopyButtonWrapper>
  );
};

let isString = (inp: any) => typeof inp === "string";

const getCodeText = (children) => {
  let current = children;
  while (!isString(current)) {
    current = current.props.children;
  }
  return current;
};

const CodeWrapper: FC<PropsWithChildren> = ({ children }) => {
  // a hacky way to getting the code part
  const codeText = getCodeText(children);

  return (
    <CodeDivWrapper>
      <CopyButton onCopy={() => witeInClipboard(codeText)} />
      <Highlight language={"dummy_val"}>{children}</Highlight>
    </CodeDivWrapper>
  );
};

export default CodeWrapper;
