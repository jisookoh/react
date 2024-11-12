import styled from "styled-components";
import { buttonStyle } from "../style/button";

export default function List() {
  return (
    <button_wrap>
      <StyledButton>버튼1</StyledButton>
      <StyledButton2>버튼2</StyledButton2>
    </button_wrap>
  );
}

const StyledButton = styled.button`
  color: black;
  ${buttonStyle}
`;
const StyledButton2 = styled.button`
  color: black;
`;
