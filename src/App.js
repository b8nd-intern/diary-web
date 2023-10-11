import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./logincommpent/login";
import Mypage from "./mypage/mypage";
import MainHome from "./mainhome/mainhome";
import MainPrivate from "./mainprivatewriting/writing";
import MainOpen from "./mainopenwriting/openwriting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/mainprivatewriting" element={<MainPrivate />} />
          <Route path="/mainopenewriting" element={<MainOpen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
