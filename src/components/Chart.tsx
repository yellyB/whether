import React, { useState, useEffect, useLayoutEffect } from "react";
import { IFcstData } from "../common/interface";
import moment from "moment";

const Chart = (props: { temporatures: IFcstData[]; rains: IFcstData[] }) => {
  const { temporatures, rains } = props;

  const draw = () => {
    const canvas = document.getElementById("chart");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      var sunny = new Image();
      var windy = new Image();
      var cloudy = new Image();
      var rainny = new Image();

      sunny.src = process.env.PUBLIC_URL + "/images/whether/sunny.png";
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

        for (const i in temporatures) {
          const temporature = temporatures[i];
          const rain = rains[i];

          x = x + xDiff;
          const newY = y - Number(temporature.fcstValue) * 5;
          ctx.lineTo(x, newY);
          ctx.arc(x, newY, radius, startAngle, endAngle, anticlockwise);

          if (Number(temporature.fcstValue) >= 0) {
            ctx.drawImage(sunny, x - 10, newY - 30, imgWidth, imgHeight);
          } else {
            ctx.drawImage(cloudy, x - 10, newY - 30, imgWidth, imgHeight);
          }
          ctx.fillText(temporature.fcstDate.substring(4, 8), x - 10, newY - 30); // 날짜
          ctx.fillText(temporature.fcstTime, x - 10, newY - 5); // 시간
          ctx.fillText(temporature.fcstValue, x - 5, newY + 15); // 기온
          ctx.fillText(rain.fcstValue + "%", x, newY + 25); // 강수확률
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
    if (temporatures.length > 0 && rains.length > 0) {
      // background();
      // draw();
    }
  }, [temporatures, rains]);

  return (
    <div className="chart_wrapper">
      <canvas id="chart" width="3000" height="200" className="chart"></canvas>
    </div>
  );
};

export default Chart;
