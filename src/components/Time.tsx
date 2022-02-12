import React, { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState("0000년 00월 00일");
  const [time, setTime] = useState("00:00:00");

  const getDayOfWeek = (val) => {
    let result = "";
    switch (val) {
      case 0:
        result = "일";
        break;
      case 1:
        result = "월";
        break;
      case 2:
        result = "화";
        break;
      case 3:
        result = "수";
        break;
      case 4:
        result = "목";
        break;
      case 5:
        result = "금";
        break;
      case 6:
        result = "토";
        break;
    }
    return result;
  };

  const currentDate = () => {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth());
    const date = String(now.getDate());
    const day = getDayOfWeek(now.getDay());
    setDate(`${month}월 ${date}일 ${day}요일`);
  };

  const currentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTime, 1000);
  };

  useEffect(() => {
    currentDate();
    startTimer();
  }, []);

  return (
    <div className="time_wrapper">
      <div className="time_date">{date}</div>
      <div className="time_time">{time}</div>
    </div>
  );
};

export default Time;
