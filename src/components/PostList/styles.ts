import styled from "styled-components";
import { maxWidth, width, showDebugBorders } from "../../../config";

export const PageTitleWrapper = styled.h1`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 10px;
  font-size: 58px;
`;

export const PageSubTitleWrapper = styled.h1`
  letter-spacing: 3px;
  text-align: center;
  font-size: 15px;
  margin-bottom: 3rem;
`;

export const PostsSectionWrapper = styled.div`
  width: ${width};
  max-width: ${maxWidth};
  margin: 1rem auto;
  padding: 2rem;
  background: ${(p) => p.theme.mainWhite};
  border: ${showDebugBorders ? "2px solid red" : ""};
`;
