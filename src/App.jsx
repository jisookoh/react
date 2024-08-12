import { Route, Routes } from "react-router-dom";
import { Main, List } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
