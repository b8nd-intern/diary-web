import React from "react";
import Footer from "../mainfootercomponent/footer";
import TodayWriting from "../maintodaywriting/todaywriting";
import Calender from "../maincalendar/calender";

const mainhome = () => {
  return (
    <div>
      <Footer />
      <TodayWriting />
      {/* <Calender/> */}
    </div>
  );
};

export default mainhome;
