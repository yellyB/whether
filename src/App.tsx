import React, { useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";
import "./App.less";
import "./style.css";
import { IFcstResponse, IRequestParams } from "./common/interface";
import { enResponse } from "./common/enType";
import moment from "moment";

const filterTmp = (item: IFcstResponse) => {
  if (item.category === enResponse.TMP) {
    return true;
  } else return false;
};

const getData = async (url: string) => {
  let result = [];
  await Axios.get(url)
    .then((response) => {
      console.log(response.data[0] === "<" ? "실패" : "33");
      if (response.status === 200) {
        const resData = response.data.response.body.items.item;
        console.log(resData);
        const filtered = resData.filter(filterTmp);
        // console.log("filted:", filtered);
        result = filtered;
      } else {
        console.log("response error");
      }
    })
    .catch((error) => console.log("error:", error));
  return result;
};

const App = () => {
  const [params, setParams] = useState<IRequestParams>({
    serviceKey: process.env.REACT_APP_API_KEY,
    numOfRows: 1000,
    pageNo: 1,
    dataType: "JSON",
    base_date: moment().format("YYYYMMDD"),
    base_time: "0200",
    nx: 55,
    ny: 127,
  });

  const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

  const [data, setData] = useState<IFcstResponse[]>([]);

  const draw = () => {
    const canvas = document.getElementById("chart");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      let x = 20;
      let y = 100;

      ctx.font = "10px";
      ctx.beginPath();
      ctx.moveTo(x, y);

      const radius = 3; // 반지름
      const startAngle = 0; // 원의 시작위치
      const endAngle = Math.PI + (Math.PI * 2) / 2; // 원의 끝위치
      const anticlockwise = true; // 시계방향/반시계방향

      data.forEach((item) => {
        x = x + 30;
        y = y + Number(item.fcstValue);
        ctx.lineTo(x, y);
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        ctx.fillText(item.fcstDate.substring(4, 8), x - 10, y - 30); //날짜
        ctx.fillText(item.fcstTime, x - 10, y - 5); // 시간
        ctx.fillText(item.fcstValue, x - 5, y + 15); //기온
      });

      ctx.stroke();
    }
  };

  useEffect(() => {
    getData(url).then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      draw();
    }
  }, [data]);

  return (
    <React.Fragment>
      {/* <button onClick={() => console.log(data)}>fff</button> */}
      <canvas
        id="chart"
        width="1000"
        height="200"
        style={{ border: "1px solid black" }}
      ></canvas>
    </React.Fragment>
  );
};

export default App;
