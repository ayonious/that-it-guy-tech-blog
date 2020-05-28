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
cursor: pointer; => change the cursor to a hand
*/

export const CopyButtonWrapper = styled.div`
  display: none;
  ${CodeDivWrapper}:hover & {
    display: block;
    float: right;
    padding: 2px 4px;
    color: rgb(150, 150, 150);
    border-style: solid;
    border-color: rgb(150, 150, 150);
    border-width: 1px;
    background: #232323;
    border-radius: 4px;
    cursor: pointer;
  }
`;
