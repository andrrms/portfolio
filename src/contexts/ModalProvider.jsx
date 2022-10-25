import { createContext, useState } from "react";

const initialContextState = {
  isModalOpen: false,
  modalType: "",
  payload: {},
  open: (type, pd) => {},
  close: () => {},
  setType: (type) => {},
  setPayload: (pd) => {},
};

export const ModalContext = createContext(initialContextState);

export default function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [payload, setModalPayload] = useState({});

  function open(type, pd) {
    if (type) setType(type);
    if (pd) setPayload(pd);
    setModalOpen(true);
  }

  function close() {
    setModalOpen(false);
    setModalPayload({});
    setModalType("");
  }

  function setType(type) {
    setModalType(type);
  }

  function setPayload(pd) {
    setModalPayload(pd);
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: modalOpen,
        modalType,
        payload,
        open,
        close,
        setType,
        setPayload,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
