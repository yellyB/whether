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

  const [theme, setTheme] = useState<string>("dark");

  const handleChangeThemeOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const digitalClock = () => {
    const clock = document.getElementById("clock");

    // 시간
    const digit_to_name =
      "zero one two three four five six seven eight nine".split(" ");

    const digits = {};
    const positions = ["h1", "h2", ":", "m1", "m2", ":", "s1", "s2"];

    // 숫자별 마크업 생성
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
        // digits 에  key:value 형식으로
        digits[item] = pos;
        // digit 엘리먼트를 페이지에 추가
        digit_holder.append(pos);
      }
    }

    // 요일
    const weekday_names = "MON TUE WED THU FRI SAT SUN".split(" ");

    const weekday_holder = clock.getElementsByClassName("weekdays")[0];

    for (const name of weekday_names) {
      const span = document.createElement("span");
      span.innerHTML = name;
      weekday_holder.appendChild(span);
    }

    const weekdays = clock.getElementsByClassName("weekdays")[0];

    // 매 초마다 타이머 돌려서 시계 갱신
    (function update_time() {
      const now = moment().format("HHmmssdA");

      digits.h1.setAttribute("class", digit_to_name[now[0]]);
      digits.h2.setAttribute("class", digit_to_name[now[1]]);
      digits.m1.setAttribute("class", digit_to_name[now[2]]);
      digits.m2.setAttribute("class", digit_to_name[now[3]]);
      digits.s1.setAttribute("class", digit_to_name[now[4]]);
      digits.s2.setAttribute("class", digit_to_name[now[5]]);

      let dow = now[6];
      dow--;

      if (dow < 0) {
        // 일요일 제일 마지막으로
        dow = 6;
      }

      // 일주일중 오늘 요일 active
      weekdays.classList.remove("active");
      const nowDay = weekdays.childNodes[dow];
      nowDay.setAttribute("class", "active");

      // 1초마다
      setTimeout(update_time, 1000);
    })();
  };

  useEffect(() => {
    digitalClock();
  }, []);

  return (
    <>
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
      <div className="time_wrapper">
        <span className="time_nowTime_time">{time}</span>
        <br />
        <span className="time_nowTime_date">{date}</span>
      </div>
    </>
  );
};

export default Time;
