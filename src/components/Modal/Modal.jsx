import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

// 모달 context

const ModalContext = createContext({});

export const Modal = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  return <ModalContext.Provider value={{ isModal, setIsModal }}>{children}</ModalContext.Provider>;
};

// 모달 트리거

const Trigger = ({ children }) => {
  const { isModal, setIsModal } = useContext(ModalContext);
  return <div onClick={() => setIsModal(!isModal)}>{children}</div>;
};

// 모달 포탈

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

// 모달 백드롭

const BackDrop = ({ children, transparent }) => {
  const { isModal, setIsModal } = useContext(ModalContext);

  useEffect(() => {
    if (isModal) document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, [isModal]);

  return (
    isModal && (
      <Background onClick={() => (transparent ? null : setIsModal(!isModal))} bgColor={transparent}>
        {children}
      </Background>
    )
  );
};

const Background = styled.section`
  position: absolute;
  width: 36rem;
  min-height: 100vh;
  z-index: 10;
  top: 0;
  background-color: ${({ bgColor }) => (bgColor ? "transparent" : "rgba(0, 0, 0, 0.3)")};
`;

// 모달 박스

const ContentBox = ({ children, XYcoordinate }) => {
  const { isModal } = useContext(ModalContext);
  return (
    isModal && (
      <ModalContent XYcoordinate={XYcoordinate} onClick={(event) => event.stopPropagation()}>
        {children}
      </ModalContent>
    )
  );
};

const ModalContent = styled.div`
  position: fixed;
  ${({ XYcoordinate }) => {
    switch (XYcoordinate) {
      case "bottom":
        return css`
          bottom: 0;
        `;
      default:
        return css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }}
  z-index: 15;
  border-radius: 12px;
  box-shadow: 0 1px 4px #d7d7d7;
  background-color: white;
`;

// 모달 닫기 버튼 감싸는 div

const Close = ({ children }) => {
  const { setIsModal } = useContext(ModalContext);
  return <div onClick={() => setIsModal(false)}>{children}</div>;
};

// 명시적 재선언

Modal.Trigger = Trigger;
Modal.BackDrop = BackDrop;
Modal.Portal = Portal;
Modal.ContentBox = ContentBox;
Modal.Close = Close;
