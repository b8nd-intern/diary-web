import React, { useState } from "react";
import "./name_login.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function NameLogin() {
  const SEREVERURL = process.env.REACT_APP_SEREVER_URL;
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(new FormData());
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [startDisabled, setStartDisabled] = useState(true);
  // const [startDisabled, setStartDisabled] = useState(true);

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
        for (let value of imageSrc.values()) {
          console.log(value);
        }
      };
    });
  };
  const CamelCase = async () => {
    if (name === "" || !imageSrc) {
      Toast.fire({
        icon: "error",
        title: "이름과 프로필 사진을 모두 입력해주세요.",
      });
    } else {
      try {
        const ReturnUserData = {
          name: name,
          picture: file,
        };
        const response = await axios.patch(SEREVERURL, ReturnUserData, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "로그인 성공",
          });
          navigate("/mainhome");
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "서버 연결 실패",
        });
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
      <> {imageSrc && ( <div id="por"> <img src={imageSrc} /> </div> )} </>
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
            onClick={() => {
              CamelCase();
            }}
            disabled={startDisabled}
          />
        </form>
      </div>
    </div>
  );
}
