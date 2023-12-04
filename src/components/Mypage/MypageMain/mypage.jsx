import React, { useState, useEffect } from "react";
import Footer from "../../footer/footer";
import Post from "../../Mypage/Post/mypagepost";
import Grass from "../Grass/mypagegrass";
import icon from "../../../assets/img/icon.png"; 
import CONFIG from "../../../config.json";
import Interceptor from "../../../lib/CustomAxios"
import Profile from "../profile/profile";

export default function MyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState("");  
  const [showProfile, setShowProfile] = useState(false);  
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await Interceptor.get(`${CONFIG.serverUrl}/user/my-info`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        console.log(response);
        const userData = response.data.data;
        setProfileImage(userData.images);
        setUserName(userData.name);

      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchProfileInfo();
  }, [accessToken]);  

  const handleProfileChange = () => {
    setShowProfile(true);
  };
  const handleCloseProfile = () => {

    setShowProfile(false);
  };

  return (
    <div className="mypage">
      <div className="mypage_main">
        <div className="main">
          <div className="profile">
            <h1 id="profile_name">프로필</h1>
            <span id="UserName">
              <h3>{userName}</h3>
            </span>
            <div className="profile_img">
              <img src={profileImage} id="traimg" />
              <div className="ChangePro" onClick={handleProfileChange}>
                <img id="img" src={icon} alt="Upload" />
                <div type="button" id="profile_correction" />
              </div>
              <input type="file" id="img_upload" style={{ display: "none" }} />
            </div>
          </div>
          <Grass />
        </div>
        <Post />
        <Footer />
        {showProfile &&( 
          <div className="test"> 
            <Profile onClose={handleCloseProfile} />  
          </div>
        )}
      </div>
    </div>
  );
}
