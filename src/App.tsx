import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './components/page1';
import { SubPage } from './components/subPage';
import { PageEnum } from './components/subPage/type';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Page1 />}></Route>
        <Route path="code" element={<SubPage page={PageEnum.CODE} />}></Route>
        <Route path="live" element={<SubPage page={PageEnum.LIVE} />}></Route>
        <Route path="user" element={<SubPage page={PageEnum.USER} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
