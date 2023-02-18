import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgb(15 9 9 / 50%);
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 50%;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
