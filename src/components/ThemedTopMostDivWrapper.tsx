import React from "react";

import { TopMostDivWrapper } from "../css/commonstyles";

const ThemedTopMostDivWrapper = ({ children, theme }) => {
  return <TopMostDivWrapper theme={theme}>{children}</TopMostDivWrapper>;
};

export default ThemedTopMostDivWrapper;
