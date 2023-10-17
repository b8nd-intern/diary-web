import "./name_login.css"
import React from "react";
import { Link } from "react-router-dom";

export default function NameLogin(){
    return(
        <div className="Name_Login">
            <div className="group2">
                <div id="por"></div>
                    <div id="login_write">
                        안녕하세요 함께 오늘 하루를 작성해볼까요?
                    </div>
                <form className="googleLog">
                <input className="write_name" type="text" placeholder="이름을 적어주세요"/>
                <Link to="/mainhome" className="Button_home"><input type="submit" value="시작하기"></input></Link> 
                </form>
        
            </div>
        </div>
    )
}