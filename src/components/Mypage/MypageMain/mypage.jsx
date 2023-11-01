import React from "react";
import Footer from "../../footer/footer";
import Post from "../../Mypage/Post/mypagepost"
import Grass from "../Grass/mypagegrass";
import icon from "../../../assets/img/icon.png"
import { useState,useRef,setFile} from 'react';


export default function MyPage() {
  return (
    <div className="mypage">
      <div className="mypage_main">
      <div className="main">
        <div className="profile">
          <h1 id="profile_name">프로필</h1>
          <span id="UserName"><h3>이해준</h3></span>
          <div className="profile_img">
            <label htmlFor="img_upload">
              <img id="img" src={icon} alt="" />
              <input type="button" id="profile_correction"></input>
            </label>
            <input type="file" id="img_upload" style={{ display: "none" }} />
          </div>
        </div>
      </div>
       <Grass /> 
      <Post />
      <Footer /> 
      </div>
    </div>
  );
}
