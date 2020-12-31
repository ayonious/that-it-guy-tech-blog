import styled from "styled-components";
import { minDesktopSize, showBorders } from "../../../config";

const bodyHeight = "250px";
const imageBodyWidth = "250px";
const infoBodyWidth = "550px";

export const CardArticleWrapper = styled.article`
  border-top: 2px solid ${(p) => p.theme.mainGrey};
  padding: 2.2rem;
  text-align: center;
  @media only screen and (min-width: ${minDesktopSize}) {
    display: flex;
    flex-direction: row;
  }
  width: 1000px;
  border: ${showBorders ? "2px solid pink" : ""};
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: ${minDesktopSize}) {
      height: ${bodyHeight};
      width: ${imageBodyWidth};
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: ${bodyHeight};
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0 1rem;
  border: ${showBorders ? "2px solid green" : ""};
  width: ${infoBodyWidth};
`;

export const InfoHeadlineWrapper = styled.span`
  font-size: 30px;
  margin-bottom: 5px;
  text-align: left;
  width: 600px;
  border: ${showBorders ? "2px solid blue" : ""};
  @media only screen and (min-width: ${minDesktopSize}) {
    text-overflow: clip;
  }
`;

export const InfoDateWrapper = styled.h6`
  color: ${(p) => p.theme.mainBlack};
  border: ${showBorders ? "2px solid green" : ""};
  text-align: left;
`;

export const InfoExcerptWrapper = styled.p`
  padding: 25px 0 35px 0;
  text-align: left;
  border: ${showBorders ? "2px solid green" : ""};
`;
