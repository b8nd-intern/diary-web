import { Link } from "react-router-dom";
import React from "react";
import Fotter from "../mainfootercomponent/footer"
import Post from "../mypagepost/mypagepost"
import Grass from "../mypagegrass/mypagegrass"

export default function MyPage() {
  return (
    <div className="mypage">
      <div className="main">
        <div className="profile">
          <h1 id="profile_name">프로필</h1>
          <span id="UserName"><h3>이해준</h3></span>
          <div className="profile_img">
            <label htmlFor="img_upload">
              <img id="img" src={require("../img/icon.png")} alt="" />
              <input type="button" id="profile_correction"></input>
            </label>
            <input type="file" id="img_upload" style={{ display: "none" }} />
          </div>
        </div>
      </div>
      <Grass />
      <Post />
      <Fotter />
    </div>
  );
}
