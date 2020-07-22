import styled from "styled-components";

export const CardArticleWrapper = styled.article`
  border-top: 2px solid ${(p) => p.theme.mainGrey};
  padding: 2.2rem;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: 768px) {
      height: 350px;
      width: 350px;
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: 350px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export const InfoHeadlineWrapper = styled.h2`
  font-size: 30px;
  margin-bottom: 5px;
`;

export const InfoDateWrapper = styled.h6`
  color: ${(p) => p.theme.mainBlack};
`;

export const InfoExccerptWrapper = styled.p`
  padding: 25px 0 35px 0;
  text-align: left;
`;
