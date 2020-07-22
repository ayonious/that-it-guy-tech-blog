import styled from "styled-components";

export const TopMostDivWrapper = styled.div`
  font-family: "Comic Neue", cursive;
  background: ${(p) => p.theme.mainWhite};
  color: ${(p) => p.theme.mainBlack};
  min-height: 100vh;
  flex-direction: column;
  display: flex;
`;
