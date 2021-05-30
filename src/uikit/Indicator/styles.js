import styled from "styled-components";

export const StyledIndicator = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 0 0 1rem;
  display: inline-block;
  align-self: center;
  border: 1px solid black;
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
`;
