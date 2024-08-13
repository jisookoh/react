import styled from "styled-components";
import { MainContainer } from "../components/main/MainContainter";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { buttonStyle } from "../style/button";

// export 함수 선언
// pages안에 파일          -> export default function Main() {}
// components안에 파일 -> export function MainContainer() {} 또는
//                                    export const MainContainer = () => {}
//                                    형식으로 사용하면 됩니다.
export default function Main() {
  // 전체적인 설명쓰~
  // 1. 모든 html 태그들은 return문 안에 넣어줍니당.
  // 1. page안에 파일은 component들의 조합으로 만들어 집니당.
  // 2. Header나 Footer 등 공통으로 들어가는 요소들은 components/common 폴더안에 파일을 생성해줍니다.(공통 요소임을 명확하게 하기 위함)
  // 3. page에 귀속되는 component(ex. MainContainer)인 경우엔 components/(페이지 명) 으로 폴더를 생성 후 그 안에 파일을 생성해줍니다.
  //     3-1. page에 귀속되는 component는 섹션별로 구분하여 파일을 생성해주면 됩니다!
  // 4. 컴포넌트가 사용되는 파일에 import 해온 후 return (<Header />) 안에 와 같은 형식으로 사용해줍니다.
  // 5. 실제 아래 Main 컴포넌트 return문은 html5 형식으로 본다면 아래와 같습니당. 다만, 우린 태그들을 분리하여 다시 사용하기 위해 component로 분리해준 것 뿐입니다!
  //     return (
  //     <>
  //       <header></header>
  //       <main>
  //         <button>버튼</button>
  //       </main>
  //       <footer></footer>
  //     </>
  //    )
  // 6. <></>은 return문 안에서 최상위 태그(Header, StyledMainContainer, Footer)가 형제태그가 되면 에러가 뜨기 때문에 아무 의미없는 태그로 감싸준겁니당
  // 7. 외부에서 사용되어야할 모든 파일/변수들은 export와 import를 해주어야 합니다!!(주고~ 받고~)

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

// styled-components의 네이밍은 제일 앞에 Styled를 붙혀서 일반 component와 구분을 해줍니다.
// const Styled+의미가명확한변수명 = styled.태그명`css속성 입력`; 형식으로 작성한 후 사용해주시면 됩니다.
// (css 속성이 없어도)일단 모든 태그들은 styled-component로 만들어 줍시다!
const StyledMainContainer = styled.main`
  padding: 40px;
  background-color: grey;
`;

// 공통으로 사용되는 css는 ${}안에 변수명을 넣어주어 하나의 파일에서 관리합니다.
// 이렇게 하나의 파일에서 관리하면 한 군데서만 수정해도 전체가 변경되기 때문에 유지보수가 편리해집니당
// ctrl + 왼쪽 마우스로 buttonStyle을 클릭하면 해당 파일이 열립니다.
const StyledButton = styled.button`
  ${buttonStyle}
`;