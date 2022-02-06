import React, { useState, useEffect, useLayoutEffect } from "react";
import { IFcstResponse, IRequestParams } from "../common/interface";
import moment from "moment";

const Chart = (props: { data: IFcstResponse[] }) => {
  const { data } = props;

  const draw = () => {
    const canvas = document.getElementById("chart");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      let x = 0;
      let y = 100;

      ctx.font = "10px";
      ctx.fillStyle = "red";

      ctx.strokeStyle = "green";
      ctx.lineWidth = 5;

      ctx.beginPath();

      const radius = 3; // 반지름
      const startAngle = 0; // 원의 시작위치
      const endAngle = Math.PI + (Math.PI * 2) / 2; // 원의 끝위치
      const anticlockwise = true; // 시계방향/반시계방향

      data.forEach((item) => {
        x = x + 30;
        const newY = y - Number(item.fcstValue) * 10;
        ctx.lineTo(x, newY);
        ctx.arc(x, newY, radius, startAngle, endAngle, anticlockwise);
        ctx.fillText(item.fcstDate.substring(4, 8), x - 10, newY - 30); //날짜
        ctx.fillText(item.fcstTime, x - 10, newY - 5); // 시간
        ctx.fillText(item.fcstValue, x - 5, newY + 15); //기온
      });

      ctx.stroke();
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
    if (data.length > 0) {
      background();
      draw();
    }
  }, [data]);

  return (
    <div className="chart_wrapper">
      <canvas id="chart" width="2200" height="200" className="chart"></canvas>
    </div>
  );
};

export default Chart;
