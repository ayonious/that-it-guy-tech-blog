import styled from "styled-components";

export const PostsSectionWrapper = styled.section`
  padding: 4rem 0;
  h1 {
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-size: 48px;
  }
  h4 {
    letter-spacing: 5px;
    text-transform: capitalize;
    font-size: 14px;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const CenterWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
  max-width: var(--maxWidth);
`;
