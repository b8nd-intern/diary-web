import React, { useState } from "react";
import "./profile.css";
import axios from "axios";
import CONFIG from "../../../config.json";

const ProfileChange = ({ onClose }) => {
  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [file, setFile] = useState();
  const accessToken = localStorage.getItem("accessToken");
  const onUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageSrc(reader.result || null);
    };
  };

  const chHandClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("images", file);

    const response = await axios.patch(
        `${CONFIG.serverUrl}/user/modify`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200){
        onClose()
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profileChange">
      <h1>프로필 수정</h1>
      <div className="prei">
        
            {" "}
            <img src={imageSrc}  />{" "}
          </div>
        
      <form action="" id="porform">
        <label htmlFor="file">
          <div className="BtnUpload">프로필 설정</div>
        </label>
        <input type="file" name="file" id="file" onChange={onUpload} />
        <input
          type="submit"
          value="수정"
          className="chsubmit"
          onClick={chHandClick}
        />
      </form>
      <div type="button" className="leaveCh" onClick={() => onClose()}>
        X
      </div>
    </div>
  );
};

export default ProfileChange;
