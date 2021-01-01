import styled from "styled-components";
import { showDebugBorders } from "../../../config";

export const TagsDivWrapper = styled.div`
  border: ${showDebugBorders ? "2px solid green" : ""};
  display: flex;
  flex-direction: row;
`;

export const TagDivWrapper = styled.div`
  border: ${showDebugBorders ? "2px solid yellow" : ""};
  background: ${(p) => p.theme.mainBlack};
  border-radius: 7px;
  padding: 0.2px 4px;
  display: inline-block;
  color: ${(p) => p.theme.mainWhite};
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    transition: all 0.3s ease-in-out;
    border: 1px solid ${(p) => p.theme.mainGrey};
  }
`;
