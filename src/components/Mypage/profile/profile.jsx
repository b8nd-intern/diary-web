import React, { useState } from "react";
import "./profile.css";
import axios from "axios";
import CONFIG from "../../../config.json"
import Cookies from "js-cookie";

const ProfileChange = ({ onClose })  => {
  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState(new FormData());
  const [file, setFile] = useState();
  const accessToken = Cookies.accessToken;
  const onNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
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
  const chHandClick = async()=>{
   try{
    const formData = new FormData();
    const data ={
        name,
    };
    formData.append(
        "string",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
    formData.append("images",file);
    const response = await axios.patch(
    `${CONFIG.serverUrl}/user/modify`,
    formData,{
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${accessToken}`,
            }
    }
    )
}catch(error){
    console.log(error);
}
    
   
  }
  

  return (
    <div className="profileChange">
        <h1>프로필 수정</h1>
        <>
          {" "}
          {imageSrc && (
            <div className="prei">
              {" "}
              <img src={imageSrc} />{" "}
            </div>
          )}{" "}
        </>
      <form action="" id="porform">
        <label htmlFor="file">
          <div className="BtnUpload">프로필 설정</div>
        </label>
        <input type="file" name="file" id="file" onChange={onUpload} />
        <input
          className="Chwritename"
          type="text"
          placeholder="이름을 적어주세요"
          onChange={onNameChange}
        />
        <input 
        type="submit"
        value="수정"
        className="chsubmit"
        onClick={(e)=>{
            e.preventDefault();
            chHandClick();
        }}
         />
      </form>
        <div type="button" className="leaveCh" onClick={() => onClose()}>X</div>
    </div>
  );
};

export default ProfileChange;
