import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./components/Login/GoogleLogin/login";
import Mypage from "../components/Mypage/mypage";
import MainHome from ".components/Mainhome/mainhome";
import MainOpen from ".components/Writing/openwriting";
import NameLogin from "./components/Login/NameLogin/name_login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/name_login" element={<NameLogin />}></Route>
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
