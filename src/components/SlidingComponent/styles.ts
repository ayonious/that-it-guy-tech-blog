import styled from "styled-components";
import { transitionAnimationStyle } from "../../../config";

interface ArticleProps {
  visible: boolean;
}

export const DivWrapper = styled.div`
  opacity: ${(p: ArticleProps) => (p.visible ? 1 : 0)};
  margin-top: ${(p: ArticleProps) => (p.visible ? "0px" : "100px")};
  transition: ${transitionAnimationStyle};
`;
