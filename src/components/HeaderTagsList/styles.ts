import styled from "styled-components";
import { showDebugBorders } from "../../../config";
import { borderRadius } from "../../../config";
import { ThemeDetails } from "../../Context/Theme/ThemeEnums";

export const HeaderTagsWrapper = styled.div`
  border: ${showDebugBorders ? "2px solid green" : ""};
  margin-bottom: 1rem;
`;

export const CustomSelectStyles = (theme: ThemeDetails) => ({
  control: (provided: any) => ({
    ...provided,
    backgroundColor: theme.mainBlack,
    color: "green",
    borderRadius,
    padding: "4px",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: theme.mainBlack,
    color: theme.mainWhite,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? theme.mainWhite : theme.mainBlack,
    color: state.isFocused ? theme.mainBlack : theme.mainWhite,
  }),
});
