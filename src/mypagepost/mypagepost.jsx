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
                    <div className="year">2023년</div>
                </span>
            </div>
      </div>
        </div>
    )
}