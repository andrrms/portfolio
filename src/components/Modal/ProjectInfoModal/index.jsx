import { useContext, useEffect } from "react";
import { ModalContext } from "../../../contexts/ModalProvider";
import { Paper, ProjectInfoModalContainer, TopBar } from "./styles";

export default function ProjectInfoModal() {
  const { payload, close } = useContext(ModalContext);

  useEffect(() => {
    function handleESC(e) {
      const key = e.key;

      if (key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, []);

  return (
    <ProjectInfoModalContainer>
      <TopBar>
        <h2>Projeto 1</h2>
      </TopBar>
      <Paper>
        <p>Hello, modal</p>
        <button onClick={close}>Close modal</button>
        <p>O id selecionado é {payload.id}</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </Paper>
    </ProjectInfoModalContainer>
  );
}
