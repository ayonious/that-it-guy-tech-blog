import styled from "styled-components";
import { minDesktopSize, showBorders } from "../../../config";

const cardBodyHeight = "250px";

export const CardArticleWrapper = styled.article`
  border-top: 2px solid ${(p) => p.theme.mainGrey};
  padding: 2.2rem;
  text-align: center;
  @media only screen and (min-width: ${minDesktopSize}) {
    display: flex;
    flex-direction: row;
  }
  border: ${showBorders ? "2px solid green" : ""};
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: ${minDesktopSize}) {
      height: ${cardBodyHeight};
      width: 250px;
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: ${cardBodyHeight};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0 1rem;
  border: ${showBorders ? "2px solid green" : ""};
`;

export const InfoHeadlineWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
  text-align: left;
  border: ${showBorders ? "2px solid green" : ""};
  @media only screen and (min-width: ${minDesktopSize}) {
    text-overflow: clip;
  }
`;

export const InfoDateWrapper = styled.h6`
  color: ${(p) => p.theme.mainBlack};
  border: ${showBorders ? "2px solid green" : ""};
`;

export const InfoExcerptWrapper = styled.p`
  padding: 25px 0 35px 0;
  text-align: left;
  border: ${showBorders ? "2px solid green" : ""};
`;
