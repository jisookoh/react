import { Route, Routes } from "react-router-dom";
import { Main, List } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      {/* 
      route 설정 아래와 같이 deps를 추가하여 사용할 수 있음
        <Route path="/list">
          <Route path="deps2" element={<List />} />
        </Route>
      */}
    </Routes>
  );
}

export default App;
