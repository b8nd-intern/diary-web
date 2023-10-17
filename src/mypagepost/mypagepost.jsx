import React, { useEffect } from "react";
import "./mypagepost.css";

export default function Mypagepost(){
        // useEffect(()=>{
        //     const elements = document.querySelectorAll(".post2");
        //     elements.forEach((element) => {
        //         element.addEventListener("click", handclick);
        //       });
        //       return () => {
        //         elements.forEach((element) => {
        //           element.removeEventListener("click",handclick );
        //         });
        //       };
        //     }, []);
  function handclick(event) {
    const target = event.target;
    const post = target.classList.contains("post2") ? target: target.closest(".post2"); //이 요소가 "post2"라는 클래스를 가지고 있는지 확인한다 ,
    const newdiv =document.createElement("div");                                        //만약 클릭한 요소가 "post2" 클래스를 가지고 있으면, 그 요소를 post로 지정한다. 그렇지 않으면, 
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
    return(
        <div className="mypagepost">
            <div className="Post-written">
                <div id="Post-written-name">작성글</div>
                <div id="Post-written-number">20장</div>
                <div id="post_view">
                <span>
                    <div className="sheets">총520장</div>
                    <select id="year">
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </span>
                <div className="post">
                    <div className="post2" onClick={handclick} >
                        <span className="month">1월</span>
                        <span className="number">15장</span>
                        <div className="post_one"></div>
                        <div className="post_two"></div>
                        <div className="post_thr"></div>
                    </div>
                    <div className="post2" onClick={handclick} >
                        <span className="month">2월</span>
                        <span className="number">20장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">3월</span>
                        <span className="number">36장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">4월</span>
                        <span className="number">40장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">5월</span>
                        <span className="number">20장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">6월</span>
                        <span className="number">34장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">7월</span>
                        <span className="number">10장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">8월</span>
                        <span className="number">12장</span>
                    </div>
                </div>
            </div>
          </div>
          
    </div>
    )
}