import React, { useState, useEffect } from "react";
import "./mypagepost.css";

export default function Mypagepost() {
  const [selectedFloor, setSelectedFloor] = useState("2023");
  const [showPost, setShowPost] = useState(false);
  const handleFloorChange = (event) => {
    setSelectedFloor(event.target.value);
  };
  useEffect(() => {});
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
      : target.closest(".post2"); //이 요소가 "post2"라는 클래스를 가지고 있는지 확인한다 ,                                     //만약 클릭한 요소가 "post2" 클래스를 가지고 있으면, 그 요소를 post로 지정한다. 그렇지 않으면,
    //부모 요소 중에서 "post2" 클래스를 가진 가장 가까운 요소를 찾아서 post로 설정한다
    if (post) {
      const expandedHeight = "300px";

      if (post.style.height === expandedHeight) {
        post.style.height = "45px";
        post.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        post.style.height = expandedHeight;
        post.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
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
