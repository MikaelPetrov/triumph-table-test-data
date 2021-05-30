import { memo } from "react";
import { initObjectData } from "../../hooks/useAppState";
import { TypeClick, TypeObjectData } from "../../types/types";
import { CloseButton, ModalContainer, ModalWindow } from "./styles";

type Props = {
  children: any;
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
  setObjectData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
};

const Modal: React.FC<Props> = (props) => {
  const closeModalWindow = () => {
    props.closeModal(false);
    props.setIsPicked(false);
    props.setObjectData(initObjectData);
  };

  const stopModalClosing = (event: TypeClick) => {
    event.stopPropagation();
  };

  return (
    <ModalContainer
      onDoubleClick={closeModalWindow}
      data-name="modal-container"
    >
      <ModalWindow onDoubleClick={stopModalClosing} data-name="modal-window">
        <h3>{props.title}</h3>
        <span onClick={closeModalWindow}>
          <CloseButton data-name="close-button">X</CloseButton>
        </span>
        {props.children}
      </ModalWindow>
    </ModalContainer>
  );
};
export default memo(Modal);
