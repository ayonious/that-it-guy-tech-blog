import styled from "styled-components";

export const CardArticleWrapper = styled.article`
  margin-bottom: 1rem;
  border-top: 2px solid ${(p) => p.theme.mainGrey};
  background: ${(p) => p.theme.mainWhite};
  padding: 1rem;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: 768px) {
      height: 350px;
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: 350px;
  padding: 1rem 0;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }
  div {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    h6 {
      color: ${(p) => p.theme.mainBlack};
    }
    p {
      padding: 30px 0 30px 0;
      text-align: left;
    }
  }
`;

export const TagDivWrapper = styled.div`
  background: ${(p) => p.theme.mainGrey};
  border-radius: 7px;
  padding: 0.2px 4px;
  display: inline-block;
  color: ${(p) => p.theme.mainBlack};
  margin-top: 0.1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  margin-right: 0.2rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  :hover {
    transition: all 0.3s ease-in-out;
    border: 1px solid ${(p) => p.theme.mainBlack};
  }
`;
