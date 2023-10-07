import React from "react";
import Marquee from "react-fast-marquee";
import "../App.css";

function Banner(separator='') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <Marquee>
      <div className="banner text-center">
          {date < 10 ? "0" + `${date} - ${month} - ${year}` : {date} - {month} - {year}  }
      </div>
    </Marquee>
  );
}

export default Banner;
