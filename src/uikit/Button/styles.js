import styled from "styled-components";
import { colors } from "../../common/colors";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  height: 40px;
  padding: 0 16px;
  ${({ margin }) => `margin: ${margin}`};
  ${({ fontSize }) => `font-size: ${fontSize ?? "16px"}`};
  ${({ fontWeight }) => `font-weight: ${fontWeight ?? "bold"}`};
  ${({ borderRadius }) =>
    `border-radius: ${borderRadius ? borderRadius : "6px"}`};
  ${({ color }) => `color: ${color || colors.white}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  transition: all 0.3s ease;

  &:hover {
    ${({ backgroundColorModifier }) =>
      `background-color: ${backgroundColorModifier}`};
  }
`;
