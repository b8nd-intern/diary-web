import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Login from './logincommpent/login'; 
import Mypage from './mypage/mypage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
