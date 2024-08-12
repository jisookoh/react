import styled from "styled-components";
import { MainContainer } from "../components/main/MainContainter";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { buttonStyle } from "../style/button";

export default function Main() {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <MainContainer />
      </StyledMainContainer>
      <StyledButton>버튼</StyledButton>
      <Footer />
    </>
  );
}

const StyledMainContainer = styled.main`
  padding: 40px;
  background-color: grey;
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
