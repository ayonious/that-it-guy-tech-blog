import styled from "styled-components";
import { showBorders } from "../../../config";
export const LinkDivWrapper = styled.div`
  border: ${showBorders ? "3px solid blue" : ""};
  a {
    border: 1px solid ${(p) => p.theme.mainBlack};
    padding: 4px 8px;
    display: inline-block;
    color: ${(p) => p.theme.mainBlack};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    margin-bottom: 2rem;
    :hover {
      background: ${(p) => p.theme.mainBlack};
      color: ${(p) => p.theme.mainWhite};
    }
  }
`;
