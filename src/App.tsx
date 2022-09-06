import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SubPage } from './components/subPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='user' element={<SubPage page='userInfo' />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
