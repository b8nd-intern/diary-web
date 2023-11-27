import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../footer/footer";
import Calendar from "../Calendar/calender";
import Swal from "sweetalert2";
import "./writing.css";
import smile from "../../assets/img/Emotion (1).png";
import wacky from "../../assets/img/Emotion (2).png";
import woo from "../../assets/img/Emotion (3).png";
import stress from "../../assets/img/Emotion (4).png";
import angry from "../../assets/img/Emotion (5).png";

const Openwriting = () => {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("selectedImage") || smile
  );
  const [selectedImageName, setSelectedImageName] = useState(
    localStorage.getItem("selectedImageName") || "smile"
  );
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("selectedColor") || ""
  );
  const [noteText, setNoteText] = useState(
    localStorage.getItem("noteText") || ""
  );
  const [isPublicSelected, setIsPublicSelected] = useState(
    localStorage.getItem("isPublicSelected") === "true" || false
  );
  const colorSelect = ["#e3f2fd", "#b6e0ff", "#93c2e4", "#feef9f"];
  const EmotionImg = [
    { name: "smile", url: smile },
    { name: "wacky", url: wacky },
    { name: "woo", url: woo },
    { name: "stress", url: stress },
    { name: "angry", url: angry },
  ];

  const handleUploadClick = () => {
    if (noteText.trim() !== "") {
      axios
        .post(
          "http://15.164.163.4/post/create",
          {
            content: noteText,
            color: selectedColor,
            emoji: selectedImageName,
            isSecret: isPublicSelected,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiNGQxMGQ1Ni01ZWI0LTRkZmMtOGQzNS1jZjk2MGE5NzExOWIiLCJBdXRob3JpemF0aW9uIjoiVVNFUiIsImlhdCI6MTcwMDU0MzkyMiwiZXhwIjo4ODEwMDU0MzkyMn0.hgWZANzbq1NM4JDkA3zVlychlVkoCPX5_s4HADrVR9b-tvqPw-HRjUsO_56hqiu5105DTGiZxAwmh2a4hU3ADQ",
              "Content-Type": "application/json",
            },
            validateStatus: () => true,
          }
        )
        .then((response) => {
          if (response.status === 201)
            Swal.fire({
              icon: "success",
              title: "업로드가 성공적으로 완료되었습니다!",
            });
          else {
            Swal.fire({
              icon: "warning",
              title: "업로드에 실패 했습니다.",
              text: response.data.message,
            });
          }
        })
        .catch((error) => {
          console.error(error);
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

  useEffect(() => {
    localStorage.setItem("selectedImageName", selectedImageName);
    localStorage.setItem("selectedImage", selectedImage);
    localStorage.setItem("noteText", noteText);
    localStorage.setItem("selectedColor", selectedColor);
    localStorage.setItem("isPublicSelected", isPublicSelected.toString());
  }, [
    selectedImageName,
    selectedImage,
    noteText,
    selectedColor,
    isPublicSelected,
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image.url);
    setSelectedImageName(image.name);
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
              <div className="writingIcon">
                {EmotionImg.map((image, index) => (
                  <button key={index} onClick={() => handleImageClick(image)}>
                    <img src={image.url} alt={`writingIcon${index + 1}`} />
                  </button>
                ))}
              </div>
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
