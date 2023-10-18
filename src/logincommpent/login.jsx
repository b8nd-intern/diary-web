import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="group">
        <h1>LOGO</h1>
        <form className="googleLog">
          <Link to="/name_login" className="Button_link">
            <input type="submit" value=""></input>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
