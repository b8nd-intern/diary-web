import React from "react";
import Footer from "../components/footer/footer";
import TodayWriting from "../components/Todaywriting/todaywriting";
import Calender from "../components/Calendar/calender";

const mainhome = () => {
  return (
    <div>
      <Footer />
      <TodayWriting />
      <Calender/>
    </div>
  );
};

export default mainhome;
