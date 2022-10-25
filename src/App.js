import React from "react";
import Modal from "./components/Modal";

import ContextProviders from "./contexts";
import Routes from "./routes";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <ContextProviders>
        <Modal />
        <Routes />
      </ContextProviders>
    </>
  );
}
