import "./mypagegrass.css"
import React from "react";

export default function Grass(){
    
    function Day(){
        return(
        <div className="Grass_day">
                <div className="day1"></div>
                <div className="day2"></div>
                <div className="day2"></div>
                <div className="day2"></div>
                <div className="day2"></div>
                <div className="day2"></div>
                <div className="day2"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day3"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                <div className="day4"></div>
                
                <div className="day5"></div>
                <div className="day5"></div>
                <div className="day5"></div>
                <div className="day5"></div>
                <div className="day5"></div>
                <div className="day5"></div>
                <div className="day5"></div>

                <div className="day6"></div>
                <div className="day6"></div>
                <div className="day6"></div>
        </div>
        )
    }

    return(
        <div className="content">
            <div className="oneweek">
                    <div className="fr">일</div>
                    <div className="fr">월</div>
                    <div className="fr">화</div>
                    <div className="fr">수</div>
                    <div className="fr">목</div>
                    <div className="fr">금</div>
                    <div className="fr">토</div>
                </div>
            <div className="grassBox">
                <div className="month">
                    <div className="mo" id="1month">1월</div>
                    <div className="mo" id="2month">2월</div>
                    <div className="mo" id="3month">3월</div>
                    <div className="mo" id="4month">4월</div>
                    <div className="mo" id="5month">5월</div>
                    <div className="mo" id="6month">6월</div>
                    <div className="mo" id="7month">7월</div>
                    <div className="mo" id="8month">8월</div>
                    <div className="mo" id="9month">9월</div>
                    <div className="mo" id="10month">10월</div>
                    <div className="mo" id="11month">11월</div>
                    <div className="mo" id="12month">12월</div>
                </div>
                <div className="grassBox_box">
                    <Day />
                </div>
            </div>
        </div>
    )
}