import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const colorSelect = ["#e3f2fd", "#b6e0ff", "#93c2e4", "#feef9f"];

  const handleUploadClick = () => {
    //서버에 보내기
    if (noteText.trim() !== "") {
      axios
        .post("https://15.164.163.4/post/create", {
          content: noteText,
          color: selectedColor,
          emoji: selectedImage,
          isSecret: !isPublicSelected,
        })
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "업로드가 성공적으로 완료되었습니다!",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "업로드를 실패 했습니다.",
            text: "서버와의 통신에 문제가 발생했습니다!",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "내용이 없어 업로드를 실패 했습니다.",
        text: "내용을 추가해주세요!",
      });
    }
  };
  //공개와 비공개,색상,이미지 선택
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
      <div className="Positioning">
        <Calendar />
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
            <div className="handleImageClick">
              <Writingicon onImageClick={handleImageClick} />
            </div>
            <div className="openColorChange">
              {colorSelect.map((color) => (
                <button
                  type="button"
                  key={color}
                  onClick={() => handleColorButtonClick(color)}
                ></button>
              ))}
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
      </div>
    </div>
  );
};

export default Openwriting;
