import styled from "styled-components";

export const CodeDivWrapper = styled.div`
  background: #232323;
  padding: 15px;
  border-radius: 8px;
  margin: 0 -1rem 1.5rem;
`;

/*
${CodeDivWrapper}:hover & : => Show this only when you hover on its parents
:focus { outline: 0; }   => after clicking dont show that blue border around the button
:hover { cursor: pointer; } => on hover change the cursor to a hand
*/

export const CopyButtonWrapper = styled.button`
  display: none;
  ${CodeDivWrapper}:hover & {
    display: block;
    float: right;
    color: rgb(255, 255, 255);
    background: #232323;
    border-radius: 4px;
    :focus {
      outline: 0;
    }
    :hover {
      cursor: pointer;
    }
  }
`;
