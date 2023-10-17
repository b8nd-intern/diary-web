import React, { useState } from "react";
import "./name_login.css";
import { Link } from "react-router-dom";

export default function NameLogin() {
  const [imageSrc, setImageSrc] = useState(null);
  const [name, setName] = useState("");
  const [startDisabled, StartDisabled] = useState(true);

  const onUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImageSrc(reader.result || null);
        checkStartEnabled();
      };
    }
  };

  const onNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    checkStartEnabled();
  };

  const checkStartEnabled = () => {
    if (name) { //이름이 써져있다면
      StartDisabled(false);
    }
    else if(imageSrc){ //프로필이 설정이 되었다면
        StartDisabled(false);
    }
     else {
      StartDisabled(true);
    }
  };
  const Starthandclick=()=>{
    if (name && imageSrc ===" "){
        alert("프로필과 이름을 입력해주세요")
    }
    else if(name === " "){
        alert("이름을 입력해주세요")
    }
    else{
        // alert("프로필을 입력해주세요")
    }
  }
  
  return (
    <div className="Name_Login">
    
      <div className="group2">
        <div id="por">
          {imageSrc && <img src={imageSrc} alt="Preview" />}
        </div>
        <form action="" id="por_form">
          <label htmlFor="file">
            <div className="btn-upload">프로필 설정</div>
          </label>
          <input type="file" name="file" id="file" onChange={onUpload} />
        </form>
        <div id="login_write">
          안녕하세요 함께 오늘 하루를 작성해볼까요?
        </div>
        <form className="googleLog">
          <input
            className="write_name"
            type="text"
            placeholder="이름을 적어주세요"
            value={name}
            onChange={onNameChange}
          />
          <Link to="/mainhome" className="Button_home">
            <input type="submit"
              value="시작하기"
             onClick={Starthandclick} 
             maxLength={5}
             disabled={startDisabled}/>
          </Link>
        </form>
      </div>
    </div>  
  );
}
