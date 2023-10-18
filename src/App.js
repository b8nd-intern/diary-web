import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
// import Login from "../src";
import Login from "./components/Login/GoogleLogin/login";
import NameLogin from "./components/Login/NameLogin/name_login";
import MyPage from "./components/Mypage/MypageMain/mypage";
import MainHome from "./components/Mainhome/mainhome";
// import Openwriting from "./components/Writing/writing";
import Openwriting from "./components/Writing/writing";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/name_login" element={<NameLogin />}></Route>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/mainopenewriting" element={<Openwriting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
