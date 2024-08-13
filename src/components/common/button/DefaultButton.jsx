import styled from "styled-components";
import { ButtonSize } from "../../../constants/button";

export const DefaultButton = ({ label = "확인", onClick, buttonSize }) => {
  return (
    <StyledButton onClick={onClick} size={buttonSize}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 18px 28px;
  border-radius: 8px;
  color: #020f07;
  background-color: #36ec7f;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.2s ease-out;

  &:hover,
  &:focus {
    box-shadow: 0 4px 24px 0 #36ec7f80;
    background-color: #14ff72;
  }

  ${(props) => {
    switch (props?.size) {
      case ButtonSize.Normal:
        return `
          min-height: 62px;  
        `;
      default:
        return `
          min-height: 62px;
        `;
    }
  }}
`;
