import { throttle } from "lodash";
import React, { useEffect, useRef, useState } from "react";

import { DivWrapper } from "./styles";

const SlidingComponent: React.FC = ({ children }) => {
  const inputRef = useRef(null);
  const [visible, changeVisible] = useState(false);

  const scrollListener = throttle(() => {
    if (!inputRef || !inputRef.current) {
      return;
    }
    const { clientHeight } = document.documentElement;
    // @ts-ignore
    const { top } = inputRef.current.getBoundingClientRect();
    const scrollPxFromBottom = clientHeight - top;

    if (scrollPxFromBottom > 20) {
      changeVisible(true);
      document.removeEventListener("scroll", scrollListener, true);
    }
  }, 200);

  useEffect(() => {
    scrollListener(); // initially without scroll even make some articles visible
    document.addEventListener("scroll", scrollListener, true);
    return () => document.removeEventListener("scroll", scrollListener, true);
  });

  return (
    <DivWrapper ref={inputRef} visible={visible}>
      {children}
    </DivWrapper>
  );
};

export default SlidingComponent;
