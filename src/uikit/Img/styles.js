import styled from "styled-components";
import { colors } from "../../common/colors";

export const StyledImage = styled.img`
  cursor: pointer;
  outline: none;
  box-shadow: none;
  height: 16px;
  padding: 0 0.25rem;
  ${({ width }) => `width: ${width}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ color }) => `color: ${color || colors.white}`};
  transition: all 0.3s ease;

  &:hover {
    ${({ colorModifier }) => `color: ${colorModifier}`};
  }
`;
