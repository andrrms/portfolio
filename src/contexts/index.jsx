import ModalProvider from "./ModalProvider";

export default function ContextProviders({ children }) {
  return (
    <>
      <ModalProvider>{children}</ModalProvider>
    </>
  );
}
