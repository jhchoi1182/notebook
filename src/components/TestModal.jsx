import React from "react";
import styled from "styled-components";
import { Modal } from "./Modal/Modal";

const TestModal = () => {
  return (
    <>
      <Modal>
        <Modal.Trigger>
          <button>열려라 참깨</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.BackDrop transparent>
            <Modal.ContentBox XYcoordinate="bottom">
              <div>종류별 모달창</div>
              <Modal.Close>
                <button>닫기</button>
              </Modal.Close>
            </Modal.ContentBox>
          </Modal.BackDrop>
        </Modal.Portal>
      </Modal>
      <div>눌러지냐</div>
    </>
  );
};

export default TestModal;

const TestBox = styled.div`
  width: 100px;
  height: 100px;
  z-index: 15;
  background-color: white;
`;
