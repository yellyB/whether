import React, { useState, useEffect } from "react";
import moment from "moment";
import "../style/clock.css";

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

  useEffect(() => {
    currentDate();
  }, []);

  const [theme, setTheme] = useState<string>("dark");

  const handleChangeThemeOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const temp = () => {
    const clock = document.getElementById("clock");

    // Map digits to their names (this will be an array)
    var digit_to_name =
      "zero one two three four five six seven eight nine".split(" ");

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = ["h1", "h2", ":", "m1", "m2", ":", "s1", "s2"];

    // Generate the digits with the needed markup,
    // and add them to the clock

    const digit_holder = clock.getElementsByClassName("digits")[0];

    for (const i in positions) {
      const item = positions[i];
      if (item === ":") {
        const dots = document.createElement("div");
        dots.setAttribute("class", "dots");
        digit_holder.appendChild(dots);
      } else {
        const pos = document.createElement("div");
        for (let i = 1; i < 8; i++) {
          const span = document.createElement("span");
          span.setAttribute("class", "d" + i);
          pos.appendChild(span);
        }
        // Set the digits as key:value pairs in the digits object
        digits[item] = pos;
        // Add the digit elements to the page
        digit_holder.append(pos);
      }
    }

    // Add the weekday names
    const weekday_names = "MON TUE WED THU FRI SAT SUN".split(" ");

    const weekday_holder = clock.getElementsByClassName("weekdays")[0];

    for (const name of weekday_names) {
      const span = document.createElement("span");
      span.innerHTML = name;
      weekday_holder.appendChild(span);
    }

    const weekdays = clock.getElementsByClassName("weekdays")[0];

    // Run a timer every second and update the clock

    (function update_time() {
      // Use moment.js to output the current time as a string
      // hh is for the hours in 12-hour format,
      // mm - minutes, ss-seconds (all with leading zeroes),
      // d is for day of week and A is for AM/PM

      var now = moment().format("HHmmssdA");

      digits.h1.setAttribute("class", digit_to_name[now[0]]);
      digits.h2.setAttribute("class", digit_to_name[now[1]]);
      digits.m1.setAttribute("class", digit_to_name[now[2]]);
      digits.m2.setAttribute("class", digit_to_name[now[3]]);
      digits.s1.setAttribute("class", digit_to_name[now[4]]);
      digits.s2.setAttribute("class", digit_to_name[now[5]]);

      // The library returns Sunday as the first day of the week.
      // Stupid, I know. Lets shift all the days one position down,
      // and make Sunday last

      var dow = now[6];
      dow--;

      // Sunday!
      if (dow < 0) {
        // Make it last
        dow = 6;
      }

      // Mark the active day of the week
      weekdays.classList.remove("active");
      const nowDay = weekdays.childNodes[dow];
      nowDay.setAttribute("class", "active");

      // Schedule this function to be run again in 1 sec
      setTimeout(update_time, 1000);
    })();
  };

  useEffect(() => {
    temp();
  }, []);

  return (
    <div className="time_wrapper">
      <div id="clock" className={theme}>
        <div className="display">
          <div className="weekdays"></div>
          <div className="ampm"></div>
          <div className="digits"></div>
        </div>
      </div>
      <div className="time_date">{date}</div>
      <div>
        <button className="time_theme_btn" onClick={handleChangeThemeOnClick}>
          {"모드 변경"}
        </button>
      </div>
    </div>
  );
};

export default Time;
