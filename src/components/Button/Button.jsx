import { StyledButton } from './Button.styled';

export const Button = ({ clickHandler, text }) => {
  return <StyledButton onClick={clickHandler}>{text}</StyledButton>;
};
