import styled from "styled-components";

export const NavBar = styled.nav`
  padding: 1rem 1.2rem;
`;

export const PageTitleWrapper = styled.div`
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 10px;
  font-size: 58px;
  text-decoration: none;
`;

export const PageSubTitleWrapper = styled.div`
  letter-spacing: 3px;
  text-align: center;
  font-size: 15px;
  font-style: none;
  text-decoration: none;
`;

export const LinkDivWrapper = styled.div`
  a {
    color: ${(p) => p.theme.mainBlack};
    text-decoration: none;
  }
`;
