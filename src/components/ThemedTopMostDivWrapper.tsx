import React, { useEffect, useState } from "react";

import { TopMostDivWrapper } from "../css/commonstyles";

const ThemedTopMostDivWrapper = ({ children, theme }) => {
  const [value, setValue] = useState(theme);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return <TopMostDivWrapper theme={theme}>{children}</TopMostDivWrapper>;
};

export default ThemedTopMostDivWrapper;
