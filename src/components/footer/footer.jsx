import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ind from "../../assets/img/assignment_ind.png";

const Footer = () => {
  return (
    <div className="bottom">
      <span className="home mini bottomIcon">
        <Link to="/mainhome">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 32.5V37.5H50V32.5H10ZM10 5H50C51.375 5 52.5521 5.48958 53.5312 6.46875C54.5104 7.44792 55 8.625 55 10V37.5C55 38.875 54.5104 40.0521 53.5312 41.0312C52.5521 42.0104 51.375 42.5 50 42.5H40V55L30 50L20 55V42.5H10C8.625 42.5 7.44792 42.0104 6.46875 41.0312C5.48958 40.0521 5 38.875 5 37.5V10C5 8.625 5.48958 7.44792 6.46875 6.46875C7.44792 5.48958 8.625 5 10 5ZM10 25H50V10H10V25Z"
              fill="black"
            />
          </svg>
        </Link>
      </span>
      <span className="writing bottomIcon">
        <Link to="/mainopenewriting">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
          >
            <rect
              width="96"
              height="96"
              x="2"
              y="2"
              stroke="#000"
              strokeWidth="4"
              rx="18"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="m64.223 34.138 2.625 2.626a3.864 3.864 0 0 1 0 5.504L41.127 68H33v-8.13l20.22-20.247 5.501-5.485a3.895 3.895 0 0 1 5.502 0ZM36.888 64.11l2.742.117 19.091-19.12-2.74-2.742-19.093 19.1v2.645Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </span>
      <span className="enterMypage mini bottomIcon">
        <Link to="/mypage">
          <img src={ind} alt="MyPageIcon" />
        </Link>
      </span>
    </div>
  );
};

export default Footer;
