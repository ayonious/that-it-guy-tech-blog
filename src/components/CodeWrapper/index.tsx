import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import hljs from "highlight.js";

import { CodeDivWrapper, CopyButtonWrapper } from "./styles";

const witeInClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const changeTextTemporarily = (
  changeText: Dispatch<SetStateAction<string>>
) => {
  changeText("Copied ✅");
  setTimeout(() => changeText("Copy 📋"), 1000);
};

interface CopyButtonProps {
  onCopy: () => void;
}

const CopyButton: FC<CopyButtonProps> = ({ onCopy }) => {
  const [text, changeText] = useState("Copy 📋");
  return (
    <CopyButtonWrapper
      onClick={() => {
        onCopy();
        changeTextTemporarily(changeText);
      }}
    >
      <span>{text}</span>
    </CopyButtonWrapper>
  );
};

const getCodeText = (children: ReactNode): string => {
  let current: ReactNode = children;
  while (typeof current !== "string") {
    if (!React.isValidElement(current)) {
      return String(current ?? "");
    }
    current = (current as ReactElement<PropsWithChildren>).props.children;
  }
  return current;
};

const CodeWrapper: FC<PropsWithChildren> = ({ children }) => {
  // a hacky way to getting the code part
  const codeText = getCodeText(children);

  return (
    <CodeDivWrapper>
      <CopyButton onCopy={() => witeInClipboard(codeText)} />
      <pre>
        <code
          className="hljs"
          dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(codeText).value }}
        />
      </pre>
    </CodeDivWrapper>
  );
};

export default CodeWrapper;
