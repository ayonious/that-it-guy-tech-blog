import styled from "styled-components";
import { minDesktopSize, showDebugBorders } from "../../../config";

const bodyHeight = "250px";
const imageBodyWidth = "250px";
const infoBodyWidth = "550px";

export const CardArticleWrapper = styled.article`
  border-top: 2px solid ${(p) => p.theme.mainGrey};
  margin-bottom: 2rem;
  text-align: center;
  border: ${showDebugBorders ? "2px solid pink" : ""};
  @media only screen and (min-width: ${minDesktopSize}) {
    display: flex;
    flex-direction: row;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 1rem;
  border: ${showDebugBorders ? "2px solid black" : ""};
  width: ${infoBodyWidth};
`;

export const InfoHeadlineWrapper = styled.span`
  font-size: 30px;
  margin-bottom: 5px;
  text-align: left;
  border: ${showDebugBorders ? "2px solid blue" : ""};
  @media only screen and (min-width: ${minDesktopSize}) {
    text-overflow: clip;
  }
`;

export const InfoDateWrapper = styled.h6`
  color: ${(p) => p.theme.mainBlack};
  border: ${showDebugBorders ? "2px solid green" : ""};
  text-align: left;
`;

export const InfoExcerptWrapper = styled.p`
  margin-top: 1rem;
  text-align: left;
  border: ${showDebugBorders ? "2px solid green" : ""};
`;
