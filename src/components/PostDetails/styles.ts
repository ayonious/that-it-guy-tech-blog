import styled from "styled-components";

export const ContentDivWrapper = styled.div`
  .header-anchor {
    opacity: 0;
    color: darkgray;
  }
  margin: 2rem 0;
  h1 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    margin-left: -2rem;
    :hover > .header-anchor {
      opacity: 1;
    }
  }
  p {
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  a {
    color: darksalmon;
  }
`;
