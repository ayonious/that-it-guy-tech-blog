import styled from "styled-components";

import { TagDivWrapper } from "../TagsList/styles";
import { maxWidth, width, showDebugBorders } from "../../../config";

export const TitleDivWrapper = styled.div`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  font-size: 48px;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const TagsDivWrapper = styled.div`
  text-align: left;
`;

export const DateDivWrapper = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  text-align: left;
  color: rgb(155, 155, 155);
`;

export const TemplateDivWrapper = styled.div`
  width: ${width};
  max-width: ${maxWidth};
  margin: 1rem auto;
  padding: 2rem;
  background: ${(p) => p.theme.mainWhite};
  border: ${showDebugBorders ? "2px solid red" : ""};
`;

export const PostTagDivWrapper = styled(TagDivWrapper)`
  font-size: 20px;
`;
