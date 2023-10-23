import React, { useState, useEffect } from "react";
import Footer from "../footer/footer";
import "./writing.css";
import Writingicon from "../../noteIcon/writingicon";
import Calendar from "../Calendar/calender";
import smile from "../../assets/img/Emotion (1).png";
import Swal from "sweetalert2";

const Openwriting = () => {
  const [selectedImage, setSelectedImage] = useState(smile);
  const [selectedColor, setSelectedColor] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isPublicSelected, setIsPublicSelected] = useState(false);

  const handleUploadClick = () => {
    if (noteText.trim() !== "") {
      Swal.fire({
        icon: "success",
        title: "업로드가 성공적으로 완료되었습니다!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "내용이 없어 업로드를 실패 했습니다.",
        text: "내용을 추가해주세요!",
      });
    }
  };
  useEffect(() => {
    const savedNoteText = localStorage.getItem("noteText");
    const savedSelectedColor = localStorage.getItem("selectedColor");
    const savedImage = localStorage.getItem("selectedImage");
    const savedIsPublicSelected =
      localStorage.getItem("isPublicSelected") === "true";

    if (savedNoteText) {
      setNoteText(savedNoteText);
    }
    if (savedSelectedColor) {
      setSelectedColor(savedSelectedColor);
    }
    if (savedImage) {
      setSelectedImage(savedImage);
    }
    setIsPublicSelected(savedIsPublicSelected);
  }, []);

  useEffect(() => {
    localStorage.setItem("noteText", noteText);
    localStorage.setItem("selectedColor", selectedColor);
    localStorage.setItem("isPublicSelected", isPublicSelected.toString());
  }, [noteText, selectedImage, selectedColor, isPublicSelected]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  const handlePublicClick = () => {
    setIsPublicSelected(true);
  };

  const handlePrivateClick = () => {
    setIsPublicSelected(false);
  };

  return (
    <div>
      <Footer />
      <div className="openWritingNotepad">
        <div>
          <div className="openWritingtext">
            <span
              onClick={handlePublicClick}
              style={{ color: isPublicSelected ? "black" : "gray" }}
            >
              공개
            </span>
            <span
              onClick={handlePrivateClick}
              style={{ color: !isPublicSelected ? "black" : "gray" }}
            >
              비공개
            </span>
          </div>
          <div>
            <Writingicon onImageClick={handleImageClick} />
          </div>
          <div className="openColorChange">
            <button
              type="button"
              onClick={() => handleColorButtonClick("#e3f2fd")}
            ></button>
            <button
              type="button"
              onClick={() => handleColorButtonClick("#b6e0ff")}
            ></button>
            <button
              type="button"
              onClick={() => handleColorButtonClick("#93c2e4")}
            ></button>
            <button
              type="button"
              onClick={() => handleColorButtonClick("#feef9f")}
            ></button>
          </div>
          <div
            className="openNotepad"
            style={{ backgroundColor: selectedColor }}
          >
            <img src={selectedImage} alt="" />
            <textarea
              name="Notepad"
              id=""
              cols="30"
              rows="10"
              style={{ backgroundColor: selectedColor }}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="openNotepadSubmit">
            <button type="button" onClick={handleUploadClick}>
              올리기
            </button>
          </div>
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default Openwriting;
