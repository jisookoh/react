import styled from "styled-components";

export default function Main() {
  return <StyledMainContainer>메인 페이지 입니다.</StyledMainContainer>;
}

const StyledMainContainer = styled.main`
  padding: 40px;
  background-color: grey;
`;
