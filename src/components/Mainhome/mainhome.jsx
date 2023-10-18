import React from "react";
import Footer from "../footer/footer";
import Todaywriting from "../Todaywriting/todaywriting";
import Calender from "../Calendar/calender";
import "./mainhome.css";

const mainhome = () => {
  return (
    <div>
      <Footer />
      <Todaywriting />
      <Calender/>
    </div>
  );
};

export default mainhome;
