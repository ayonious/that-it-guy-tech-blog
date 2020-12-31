import styled from "styled-components";
import { maxWidth, width } from "../../../config";

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

export const PostsSectionWrapper = styled.section`
  padding: 2rem 0;
`;

export const CenterWrapper = styled.div`
  width: ${width};
  margin: 0 auto;
  max-width: ${maxWidth};
`;
