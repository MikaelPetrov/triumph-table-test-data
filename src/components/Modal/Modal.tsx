import { memo } from "react";
import { CloseButton, ModalContainer, ModalWindow } from "./styles";

type Props = {
  children: any;
  title: string;
  onClose: (value: boolean) => void;
};

const Modal: React.FC<Props> = (props) => {
  return (
    <ModalContainer data-name="modal-container">
      <ModalWindow data-name="modal-window">
        <div>
          <h2>{props.title}</h2>
          <span onClick={() => props.onClose(false)}>
            <CloseButton data-name="close-button">X</CloseButton>
          </span>
        </div>
        <div>{props.children}</div>
      </ModalWindow>
    </ModalContainer>
  );
};
export default memo(Modal);
