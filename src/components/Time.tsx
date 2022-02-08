import React, { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState("0000년 00월 00일");
  const [time, setTime] = useState("00:00:00");

  const currentDate = () => {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth());
    const day = String(now.getDate());
    setDate(`${year}년 ${month}월 ${day}일`);
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
