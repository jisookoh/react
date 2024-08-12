import styled from "styled-components";
import { buttonStyle } from "../style/button";

export default function List() {
  return <StyledButton>버튼</StyledButton>;
}

const StyledButton = styled.button`
  color: black;
  ${buttonStyle}
`;
