import React, { useState, useEffect, useLayoutEffect } from "react";
import { IFcst } from "../common/interface";
import moment from "moment";
import { whetherState } from "../common/utils";
import { enSkyState } from "../common/enType";

const Chart = (props: { values: IFcst[] }) => {
  const { values } = props;

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
        let y = 100;
        const xDiff = 40;

        ctx.font = "10px";
        ctx.fillStyle = "red";

        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;

        ctx.beginPath();

        const radius = 3; // 반지름
        const startAngle = 0; // 원의 시작위치
        const endAngle = Math.PI + (Math.PI * 2) / 2; // 원의 끝위치
        const anticlockwise = true; // 시계방향/반시계방향

        for (const value of values) {
          x = x + xDiff;
          const newY = y - value.tmp * 5;

          // 시간별 좌표 원
          ctx.lineTo(x, newY);
          ctx.arc(x, newY, radius, startAngle, endAngle, anticlockwise);

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
            newY - 30,
            imgWidth,
            imgHeight
          );

          // ctx.fillText(value.fcstDate.substring(4, 8), x - 10, newY - 30); // 날짜
          ctx.fillText(value.fcstTime, x - 10, newY - 5); // 시간
          ctx.fillText(value.tmp, x - 5, newY + 15); // 기온
          ctx.fillText(value.pop + "%", x, newY + 25); // 강수확률
        }
        ctx.stroke();
      };
    }

    //날짜 출력
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.font = "10px";
      ctx.fillStyle = "green";

      let x = 0;
      let y = 200;
      const xDiff = 40;

      let date = "";
      for (const value of values) {
        x = x + xDiff;

        if (date !== value.fcstDate) {
          date = value.fcstDate;

          ctx.fillText(value.fcstDate.substring(4, 8), x - 10, y); // 날짜
        }
      }
    }
  };

  const background = () => {
    const canvas = document.getElementById("chart");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      // 그레이디언트를 생성한다
      var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
      lingrad.addColorStop(0, "orange");
      lingrad.addColorStop(0.5, "white");
      lingrad.addColorStop(1, "blue");

      // 외곽선과 채움 스타일에 그레이디언트를 적용한다
      ctx.fillStyle = lingrad;

      // 도형을 그린다
      ctx.fillRect(10, 10, 1000, 180);
    }
  };

  useEffect(() => {
    if (values.length > 0) {
      // background();
      draw();
    }
  }, [values]);

  return (
    <div className="chart_wrapper">
      <canvas id="chart" className="chart" width="3000" height="250"></canvas>
    </div>
  );
};

export default Chart;
