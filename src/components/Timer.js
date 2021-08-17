import React, { useState, useEffect } from "react";

const Timer = ({ country }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const getKrDay = ["일", "월", "화", "수", "목", "금", "토"];
  const getUsDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const getUsMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      {country === "korea" ? (
        <h2>
          {`${time.getFullYear()}년 ${
            time.getMonth() + 1
          }월 ${time.getDate()}일 ${
            getKrDay[time.getDay()]
          }요일 ${time.toLocaleTimeString()}`}
        </h2>
      ) : (
        <h2>
          {`${getUsDay[time.getDay()]}day ${
            getUsMonth[time.getMonth()]
          } ${time.getDate()}, ${time.getFullYear()}  ${time.toLocaleTimeString(
            "en-US"
          )}`}
        </h2>
      )}
    </>
  );
};

export default Timer;
