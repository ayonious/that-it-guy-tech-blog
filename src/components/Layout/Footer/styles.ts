import styled from "styled-components";

export const NavCenter = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  text-align: center;
  background: ${(p) => p.theme.mainWhite};
`;

export const NavHeader = styled.div`
  padding: 1rem 1.25rem;
`;

export const IconWrapper = styled.span`
  margin-top: 0.2rem;
`;

export const SpanWrapper = styled.span`
  padding: 0.2rem 0.2rem;
  text-align: center;
`;

export const NavBar = styled.nav`
  padding: 0 0rem;
  margin-top: auto;
`;
