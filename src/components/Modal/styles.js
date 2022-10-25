import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 50000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;

  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;
