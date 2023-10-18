import React from "react";
import Footer from "../Footer/footer";
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
