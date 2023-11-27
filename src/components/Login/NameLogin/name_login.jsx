import React, { useState } from "react";
import "./name_login.css";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { showToast } from "../../../constants/Swal/Toast";

export default function NameLogin() {
  const SEREVERURL = process.env.REACT_APP_SEREVER_URL;
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(new FormData());
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [startDisabled, setStartDisabled] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies();
  const accessToken = cookies.accessToken;

  const onUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        imageSrc.append("images", file);
        setImageSrc(reader.result || null);
        resolve();
      };
    });
  };
  const startHandClick = async () => {
    if (name === "" || !imageSrc) {
      showToast("error", "이름과 프로필 사진을 모두 입력해주세요.");
    } else {
      try {
        const formData = new FormData();
        const data = {
          name,
        };
        formData.append(
          "settingData",
          new Blob([JSON.stringify(data)], { type: "application/json" })
        );

        formData.append("images", file);

        const response = await axios.patch(
          `${SEREVERURL}/user/setting`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          showToast("success", "로그인 성공");
          navigate("/mainhome");
        }
      } catch (error) {
        showToast("error", "서버 연결 실패");
      }
    }
  };

  const onNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    checkStartEnabled();
  };

  const checkStartEnabled = () => {
    if (name && imageSrc) {
      setStartDisabled(false);
    } else {
      setStartDisabled(true);
    }
  };
  return (
    <div className="Name_Login">
      <div className="group2">
        <>
          {" "}
          {imageSrc && (
            <div id="por">
              {" "}
              <img src={imageSrc} />{" "}
            </div>
          )}{" "}
        </>
        <form action="" id="por_form">
          <label htmlFor="file">
            <div className="btn-upload">프로필 설정</div>
          </label>
          <input type="file" name="file" id="file" onChange={onUpload} />
        </form>
        <div id="login_write">
          <p>안녕하세요 함께 오늘 하루를 작성해볼까요?</p>
        </div>
        <form className="googleLog">
          <input
            className="write_name"
            type="text"
            placeholder="이름을 적어주세요"
            value={name}
            onChange={onNameChange}
          />
          <input
            type="submit"
            value="시작하기"
            className="Button_home"
            onClick={(e) => {
              e.preventDefault();
              startHandClick();
            }}
            disabled={startDisabled}
          />
        </form>
      </div>
    </div>
  );
}
