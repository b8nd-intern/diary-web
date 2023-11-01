import React, { useState } from "react";
import "./name_login.css";
import {  Link,useNavigate } from "react-router-dom";




export default function NameLogin() {
  const navigate = useNavigate()
  const [imageSrc, setImageSrc] = useState(new FormData());
  const [name, setName] = useState("");
  const [startDisabled,setStartDisabled] = useState(true)
  // const [startDisabled, setStartDisabled] = useState(true);

  const onUpload = (e) => {
    checkStartEnabled();
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    return new Promise((resolve) => {
      reader.onload = () => {
      imageSrc.append("images",file)
        setImageSrc(reader.result || null);
        resolve()
        for (let value of imageSrc.values()) {
          console.log(value);
        }
      }
    })
  };
  const Starthandclick = () => {
    if (name === "" || !imageSrc) {
      alert("이름과 프로필 사진을 모두 입력해주세요.");
    } else {
      navigate("/mainhome");
    }
  };

  const onNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    console.log(newName)
 
  };

  const checkStartEnabled = () => {
    if (name || imageSrc) {
      setStartDisabled(false);
    } else {
      setStartDisabled(true);
    }
  };
  return (
    <div className="Name_Login">
    
      <div className="group2">
        <div id="por">
          {imageSrc && <img src={imageSrc}  />}
        </div>
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
            <input type="submit"
              value="시작하기"
              className="Button_home"
              onClick={() => {
                Starthandclick();
                navigate("/mainhome");
              }}
             disabled={startDisabled}/>
        </form>
      </div>
    </div>  
  );
}
