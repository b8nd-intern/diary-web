import React from "react";
import "./mypagepost.css";

export default function mypagepost(){
         function handclick(event){
            const post = event.target;
            const expandedHeight = "300px"; // 더 길어질 높이 설정
        
            if (post.style.height === expandedHeight) {
                post.style.height = "45px"; // 초기 높이로 복원
                post.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // 그림자 복원
            } else {
                post.style.height = expandedHeight; // 더 길어질 높이로 확장
                post.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)"; // 더 진한 그림자로 변경
            }
         }


    return(
        <div className="mypagepost">
            <div className="Post-written">
                <div id="Post-written-name">작성글</div>
                <div id="Post-written-number">200장</div>
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
                    </div>
                    <div className="post2" onClick={handclick}>
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
                    <div className="post2">
                        <span className="month">5월</span>
                        <span className="number">20장</span>
                    </div>
                    <div className="post2" onClick={handclick}>
                        <span className="month">6월</span>
                        <span className="number">34장</span>
                    </div>
                    <div className="post2">
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