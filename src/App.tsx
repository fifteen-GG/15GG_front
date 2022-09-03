import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./components/page1";
import { SubPage } from "./components/subPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Page1 />}></Route>
        <Route path="page1.5" element={<SubPage page="1.5" />}></Route>
        <Route path="page2" element={<SubPage page="2" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
