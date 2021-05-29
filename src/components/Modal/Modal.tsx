import { memo } from "react";
import { initObjectData } from "../../hooks/useAppState";
import { TypeObjectData } from "../../types/types";
import { CloseButton, ModalContainer, ModalWindow } from "./styles";

type Props = {
  children: any;
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTempData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
};

const Modal: React.FC<Props> = (props) => {
  const closeModalWindow = () => {
    props.closeModal(false);
    props.setTempData(initObjectData);
  };

  return (
    <ModalContainer data-name="modal-container">
      <ModalWindow data-name="modal-window">
        <div>
          <h3>{props.title}</h3>
          <span onClick={() => closeModalWindow()}>
            <CloseButton data-name="close-button">X</CloseButton>
          </span>
        </div>
        <div>{props.children}</div>
      </ModalWindow>
    </ModalContainer>
  );
};
export default memo(Modal);
