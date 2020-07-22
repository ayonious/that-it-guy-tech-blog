import styled from 'styled-components';

import { TagDivWrapper } from '../TagsList/styles';

export const TitleDivWrapper = styled.div`
  letter-spacing: 5px;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  font-size: 48px;
  text-align: center;
`;

export const TagsDivWrapper = styled.div`
  text-align: center;
`;

export const DateDivWrapper = styled.div`
  letter-spacing: 5px;
  text-transform: capitalize;
  font-size: 14px;
  text-align: center;
  margin-bottom: 3rem;
`;

export const TemplateDivWrapper = styled.div`
  width: 80vw;
  margin: 4rem auto;
  max-width: 750px;
  padding: 2rem;
  background: ${(p) => p.theme.mainWhite};
`;

export const PostTagDivWrapper = styled(TagDivWrapper)`
  font-size: 20px;
`;
