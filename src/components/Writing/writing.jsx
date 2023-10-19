import React, { useState } from "react";
import Footer from "../footer/footer";
import "./writing.css";
import Writingicon from "../../noteIcon/writingicon";
import Calendar from "../Calendar/calender";

const Openwriting = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <Footer />
      <div className="openWritingNotepad">
        <div>
          <div className="openWritingtext">
            <span>공개</span>
            <span>비공개</span>
          </div>
          <div>
            <Writingicon onImageClick={handleImageClick} />
          </div>
          <div className="openColorChange">
            <button type="button" onClick={() => handleColorButtonClick("#e3f2fd")}></button>
            <button type="button" onClick={() => handleColorButtonClick("#b6e0ff")}></button>
            <button type="button" onClick={() => handleColorButtonClick("#93c2e4")}></button>
            <button type="button" onClick={() => handleColorButtonClick("#feef9f")}></button>
          </div>
          <div className="openNotepad" style={{ backgroundColor: selectedColor }}>
            <img src={selectedImage} alt=""/>
            <textarea name="Notepad" id="" cols="30" rows="10" style={{ backgroundColor: selectedColor }}></textarea>
          </div>
          <div className="openNotepadSubmit">
            <button type="button">올리기</button>
          </div>
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default Openwriting;
