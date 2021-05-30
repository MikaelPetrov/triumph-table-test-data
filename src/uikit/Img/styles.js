import styled from "styled-components";

export const StyledImage = styled.img`
  cursor: pointer;
  outline: none;
  box-shadow: none;
  height: 16px;
  padding: 0 0.25rem;
  ${({ position }) => `position: ${position ?? "initial"}`};
  ${({ left }) => `left: ${left}`};
  ${({ bottom }) => `bottom: ${bottom}`};
`;
