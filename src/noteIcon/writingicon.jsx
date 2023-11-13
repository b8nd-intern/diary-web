import React from "react";
import "./writingicon.css";
import smile from "../assets/img/Emotion (1).png";
import wacky from "../assets/img/Emotion (2).png";
import woo from "../assets/img/Emotion (3).png";
import stress from "../assets/img/Emotion (4).png";
import angry from "../assets/img/Emotion (5).png";

const Writingicon = ({ onImageClick }) => {
  const EmotionImg = [smile, wacky, woo, stress, angry];

  const handleImageClick = (imageUrl) => {
    onImageClick(imageUrl);
    localStorage.setItem("selectedImage", imageUrl);
    console.log(imageUrl);
  };

  return (
    <div className="writingIcon">
      {EmotionImg.map((key, index) => (
        <button key={index} onClick={() => handleImageClick(key)}>
          <img src={key} alt={`writingIcon${index + 1}`} />
        </button>
      ))}
    </div>
  );
};

export default Writingicon;