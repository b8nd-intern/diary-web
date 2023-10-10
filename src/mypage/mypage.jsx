// import { Link } from "react-router-dom";
import React from "react";

export default function MyPage() {
  return (
    <div className="mypage">
      <div className="main">
        <div className="profile">
          <h1 id="profile_name">프로필</h1>
          <div className="profile_img">
            <label htmlFor="img_upload">
              <img id="img" src={require("../img/icon.png")} alt="" />
              <input type="button" id="profile_correction"></input>
            </label>
            <input type="file" id="img_upload" style={{ display: "none" }} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div id="writting_button">
          <input className="button" type="button" />
          <input className="button1" type="button" />
        </div>
      </div>
    </div>
  );
}
