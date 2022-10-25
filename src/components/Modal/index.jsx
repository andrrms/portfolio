import { useContext } from "react";

import ProjectInfoModal from "./ProjectInfoModal";

import { ModalContext } from "../../contexts/ModalProvider";
import { ModalContainer } from "./styles";

export default function Modal() {
  const { isModalOpen, modalType, close } = useContext(ModalContext);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      close();
    }
  }

  function getEquivalentModal(type) {
    switch (type) {
      case "project-info": {
        return <ProjectInfoModal />;
      }

      default: {
        return close();
      }
    }
  }

  return (
    isModalOpen && (
      <ModalContainer onClick={handleOutsideClick}>
        {getEquivalentModal(modalType)}
      </ModalContainer>
    )
  );
}
