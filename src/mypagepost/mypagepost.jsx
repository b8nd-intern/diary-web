import React from "react";
import "./mypagepost.css";

export default function mypagepost(){
    return(
        <div className="mypagepost">
            <div className="Post-written">
                <div id="Post-written-name">작성글</div>
                <div id="Post-written-number">20장</div>
                <div id="post_view">
                <span>
                    <div className="sheets">520장</div>
                    <select id="year">
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </span>
                <div className="post">
                    <div className="post1">
                        <span className="month">1월</span>
                        <span className="number">15장</span>
                    </div>
                    <div className="post2">
                        <span className="month">2월</span>
                        <span className="number">20장</span>
                    </div>
                    <div className="post2">
                        <span className="month">3월</span>
                        <span className="number">36장</span>
                    </div>
                    <div className="post2">
                        <span className="month">4월</span>
                        <span className="number">40장</span>
                    </div>
                    <div className="post2">
                        <span className="month">5월</span>
                        <span className="number">20장</span>
                    </div>
                    <div className="post2">
                        <span className="month">6월</span>
                        <span className="number">34장</span>
                    </div>
                    <div className="post2">
                        <span className="month">7월</span>
                        <span className="number">10장</span>
                    </div>
                    <div className="post2">
                        <span className="month">8월</span>
                        <span className="number">12장</span>
                    </div>
                </div>
            </div>
          </div>
          
    </div>
    )
}