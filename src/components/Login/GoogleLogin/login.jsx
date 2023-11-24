import React from "react";
import GOOGLE from "../../../constants/Google/google";
import LOGO from "../../../assets/img/BN.png";

export default function Login() {
  return (
    <div className="login">
      <div className="group">
        <h1>
          <img src={LOGO} />
        </h1>
        <GOOGLE className="GOOGLE"></GOOGLE>
      </div>
    </div>
  );
}
