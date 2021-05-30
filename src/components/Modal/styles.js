import styled from "styled-components";
import { colors } from "../../common/colors";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blackSemiTransparent};
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 320px;
  height: 400px;
  background: ${colors.white};
  border: 1px solid ${colors.trolleyGrey};
  border-radius: 6px;
`;

export const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  border: none;
  outline: none;
  background: none;
  color: ${colors.black};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.darkGray};
  }
`;
