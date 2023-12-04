import React, { useState, useEffect } from "react";
import "./mypagepost.css";
import axios from "axios";
import CONFIG from "../../../config.json";

export default function Mypagepost() {
  const [selectedFloor, setSelectedFloor] = useState("2023");
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMonthlyPosts = async () => {
      try {
        const month = 1;

        const response = await axios.get(
          `${CONFIG.serverUrl}/post/month/${selectedFloor}/${month}`
        );

        if (response.data.status === 0) {
          setPosts(response.data.data);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchMonthlyPosts();
  }, [selectedFloor]);

  const handleFloorChange = (event) => {
    setSelectedFloor(event.target.value);
  };

  const handleProst = () => {
    setShowPost(true);
  };

  const handleClosePost = () => {
    setShowPost(false);
  };

 
function handclick(event) {
  const target = event.target;
  const post = target.classList.contains("post2")
    ? target
    : target.closest(".post2");

  if (post) {
    const expandedHeight = "300px";

    if (post.style.height === expandedHeight) {
      post.style.height = "45px";
      post.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
      post.style.overflow = "hidden"; // 스크롤 감추기
    } else {
      post.style.height = expandedHeight;
      post.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
      post.style.overflowY = "scroll"; // 스크롤 활성화
    }
  }
}

  return (
    <div className="mypagepost">
      {showPost && (
        <div className="ShowpostBack" onClick={handleClosePost}>
          <div className="Showpost"></div>
        </div>
      )}

      <div className="Post-written">
        <div id="Post-written-name">작성글</div>
        <div id="Post-written-number">{}장</div>
        <div id="post_view">
          <span>
            <div className="sheets">총{}장</div>
            <select
              id="year"
              onChange={handleFloorChange}
              value={selectedFloor}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </span>
        </div>
        <div className="post">
          {selectedFloor === "2023" ? (
            <>
              <div className="post2" onClick={handclick}>
                <span className="month">1월</span>
                <span className="number">{}장</span>
                <div className="post_area">
                  <div className="post_one" onClick={handleProst}></div>
                  <div className="post_one" onClick={handleProst}></div>
                  <div className="post_one" onClick={handleProst}></div>
                  <div className="post_one" onClick={handleProst}></div>
                  <div className="post_one" onClick={handleProst}></div>
                  <div className="post_one"></div>
                  <div className="post_one"></div>
                  <div className="post_one"></div>
                </div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">2월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">3월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">4월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">5월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">6월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">7월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">8월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">9월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">10월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">11월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">12월</span>
                <span className="number">{}장</span>
                <div className="post_area"></div>
              </div>
            </>
          ) : selectedFloor === "2022" ? (
            <>
              <div className="post2" onClick={handclick}>
                <span className="month">1월</span>
                <span className="number">{}장</span>
                <div className="post_area">
                  <div className="post_one"></div>
                </div>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">2월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">3월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">4월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">5월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">6월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">7월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">8월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">9월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">10월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">11월</span>
                <span className="number">{}장</span>
              </div>
              <div className="post2" onClick={handclick}>
                <span className="month">12월</span>
                <span className="number">{}장</span>
              </div>
            </>
          ) : (
            selectedFloor === "2021"
          )}
        </div>
      </div>
    </div>
  );
}
