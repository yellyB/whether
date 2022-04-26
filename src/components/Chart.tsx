import React, { useState, useEffect, useLayoutEffect } from "react";
import { IFcst } from "../common/interface";
import moment from "moment";
import { weekOfDay, whetherState } from "../common/utils";
import { enSkyState } from "../common/enType";

const Chart = (props: { values: IFcst[] }) => {
  const { values } = props;

  const CART_WIDTH = 3800;
  const CART_HEIGHT = 250;

  /**
  TODO
  1. useRef써서 요소 
  **/
  const draw = () => {
    const canvas = document.getElementById("chart");
    const canvas1 = document.getElementById("chart");

    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const ctx1 = canvas1.getContext("2d");

      const sun = new Image();
      const sunny = new Image();
      const rain = new Image();
      const rain1 = new Image();
      const rainny = new Image();
      const rainny1 = new Image();
      const snow = new Image();
      const snowy = new Image();
      const cloud = new Image();
      const cloudy = new Image();

      sun.src = process.env.PUBLIC_URL + "/images/whether/sun.png";
      sunny.src = process.env.PUBLIC_URL + "/images/whether/sunny.png";
      rain.src = process.env.PUBLIC_URL + "/images/whether/rain.png";
      rain1.src = process.env.PUBLIC_URL + "/images/whether/rain1.png";
      rainny.src = process.env.PUBLIC_URL + "/images/whether/rainny.png";
      rainny1.src = process.env.PUBLIC_URL + "/images/whether/rainny1.png";
      snow.src = process.env.PUBLIC_URL + "/images/whether/snow.png";
      snowy.src = process.env.PUBLIC_URL + "/images/whether/snowy.png";
      cloud.src = process.env.PUBLIC_URL + "/images/whether/cloud.png";
      cloudy.src = process.env.PUBLIC_URL + "/images/whether/cloudy.png";

      const imgWidth = 20;
      const imgHeight = 20;

      cloudy.onload = () => {
        let x = 0;
        let y = 80; // y좌표의 중간 지점 = 120. 첫 위치는 하단에 텍스트 고려해서 조금 높게 설정
        const LARGER = 4; // y좌표를 1씩 증감하면 너무 차이가 적기 때문에 증폭시키기 위한 계수
        y = y + Math.abs(values[0].tmp) * LARGER; // 맨 처음값을 y에 두기 위한 계산
        const FIXED_Y = 220;
        const X_DIFF = 50;

        ctx.strokeStyle = "pink";
        ctx.lineWidth = 3;

        ctx.beginPath();

        const RADIUS = 3; // 반지름
        const START_ANGLE = 0; // 원의 시작위치
        const END_ANGLE = Math.PI + (Math.PI * 2) / 2; // 원의 끝위치
        const ANTI_CLOCKWISE = true; // 시계방향/반시계방향

        let date = "";

        for (const value of values) {
          x = x + X_DIFF;
          const newY = y - value.tmp * LARGER;

          // 시간별 좌표 원
          ctx.lineTo(x, newY);
          ctx.arc(x, newY, RADIUS, START_ANGLE, END_ANGLE, ANTI_CLOCKWISE);

          const wState = whetherState(value);
          // 날씨 상태 이미지
          ctx.drawImage(
            wState === enSkyState.sun
              ? sun
              : wState === enSkyState.rainny
              ? rainny
              : wState === enSkyState.rainny1
              ? rainny1
              : wState === enSkyState.snow
              ? snow
              : wState === enSkyState.snowy
              ? snowy
              : wState === enSkyState.cloud
              ? cloud
              : wState === enSkyState.cloudy
              ? cloudy
              : "",
            x - 10,
            newY - 50,
            imgWidth,
            imgHeight
          );

          ctx.font = "14px nexonGothic_Bold";
          ctx.fillStyle = "red";
          ctx.fillText(value.tmp + "˚", x - 10, newY - 10); // 기온

          ctx.font = "10px nexonGothic";
          ctx.fillStyle = value.pop >= 60 ? "skyblue" : "gray";
          ctx.fillText(value.pop + "%", x - 5, newY + 25); // 강수확률

          if (date !== value.fcstDate) {
            date = value.fcstDate;
            // ctx.font = "18px nexonGothic";
            // ctx.fillStyle = "purple";
            // ctx.fillText(value.fcstDate.substring(4, 8), x - 10, FIXED_Y); // 날짜
            const dayDiff = moment(value.fcstDate).diff(
              moment().format("YYYYMMDD"),
              "days"
            );

            ctx.font = "12px nexonGothic_Bold";
            ctx.fillStyle = "black";
            ctx.fillText(weekOfDay(dayDiff), x - 10, FIXED_Y); // 날짜로 내일,모레..출력
            continue;
          }
          ctx.font = "12px nexonGothic";
          ctx.fillStyle = "darkgray";
          let valueTime = value.fcstTime.substring(0, 2) + "시";
          ctx.fillText(valueTime, x - 10, FIXED_Y); // 시간
        }
        ctx.stroke();
      };
    }
  };

  const background = () => {
    const canvas = document.getElementById("chart");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      // 그레이디언트를 생성한다
      var lingrad = ctx.createLinearGradient(0, 0, 0, CART_HEIGHT);
      lingrad.addColorStop(0, "rgb(243 205 194 / 10%)");
      lingrad.addColorStop(0.4, "white");
      lingrad.addColorStop(0.6, "white");
      lingrad.addColorStop(1, "rgb(202 229 239 / 10%)");

      // 외곽선과 채움 스타일에 그레이디언트를 적용한다
      ctx.fillStyle = lingrad;

      // 도형을 그린다
      ctx.fillRect(0, 0, CART_WIDTH, CART_HEIGHT);
    }
  };

  useEffect(() => {
    if (values.length > 0) {
      background();
      draw();
    }
  }, [values]);

  return (
    <div className="chart_wrapper">
      <canvas
        id="chart"
        className="chart"
        width={CART_WIDTH - values.length * 5}
        height={CART_HEIGHT}
      ></canvas>
    </div>
  );
};

export default Chart;
