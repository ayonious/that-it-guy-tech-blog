import React from "react";
import { CodeDivWrapper, CopyButtonWrapper } from "./styles";

const CopyButton = () => {
  return (
    <CopyButtonWrapper>
      <span>copy</span>
    </CopyButtonWrapper>
  );
};

const CodeWrapper = ({ children }) => {
  return (
    <CodeDivWrapper>
      <CopyButton />
      {children}
    </CodeDivWrapper>
  );
};

export default CodeWrapper;
