import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderNav>
        <StyledHeaderUl>
          <StyledHeaderLi>header</StyledHeaderLi>
        </StyledHeaderUl>
      </StyledHeaderNav>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.header`
  background-color: red;
`;

const StyledHeaderNav = styled.nav``;

const StyledHeaderUl = styled.ul``;

const StyledHeaderLi = styled.li``;
