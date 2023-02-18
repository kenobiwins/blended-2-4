const { default: styled } = require('styled-components');

export const StyledButton = styled.button`
  padding: 12px;
  background-color: #4949af;
  cursor: pointer;
  transition: opacity linear 250ms;

  :hover {
    opacity: 0.7;
    color: #01ea0;
  }
`;
