import styled from "styled-components";
import { minTabletSize, showDebugBorders, borderRadius } from "../../../config";

const bodyHeight = "250px";
const imageBodyWidth = "250px";

export const CardArticleWrapper = styled.article`
  border: 2px solid ${(p) => p.theme.mainGrey};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  margin-bottom: 2rem;
  text-align: center;
  border: ${showDebugBorders ? "2px solid pink" : ""};
  @media only screen and (min-width: ${minTabletSize}) {
    display: flex;
    flex-direction: row;
  }
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: ${minTabletSize}) {
      height: ${bodyHeight};
      width: ${imageBodyWidth};
    }
  }
`;

export const InfoDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: ${showDebugBorders ? "2px solid black" : ""};
`;

export const InfoHeadlineWrapper = styled.span`
  font-size: 30px;
  margin-bottom: 5px;
  text-align: left;
  border: ${showDebugBorders ? "2px solid blue" : ""};
  text-overflow: clip;
  @media only screen and (min-width: ${minTabletSize}) {
    text-overflow: clip;
  }
`;

export const InfoDateWrapper = styled.div`
  color: ${(p) => p.theme.mainBlack};
  font-size: 13px;
  border: ${showDebugBorders ? "2px solid green" : ""};
  text-align: left;
`;

export const InfoExcerptWrapper = styled.p`
  margin-top: 1rem;
  text-align: left;
  text-overflow: clip;
  border: ${showDebugBorders ? "2px solid green" : ""};
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: ${showDebugBorders ? "2px solid green" : ""};
`;
