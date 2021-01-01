import styled from "styled-components";
import { showDebugBorders, transitionAnimationStyle } from "../../../config";
export const LinkDivWrapper = styled.div`
  border: ${showDebugBorders ? "3px solid blue" : ""};
  a {
    border: 1px solid ${(p) => p.theme.mainBlack};
    padding: 4px 8px;
    color: ${(p) => p.theme.mainBlack};
    text-decoration: none;
    transition: ${transitionAnimationStyle};
    :hover {
      background: ${(p) => p.theme.mainBlack};
      color: ${(p) => p.theme.mainWhite};
    }
  }
`;
