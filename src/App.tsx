import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.less";
import "./style.css";
import { IFcstResponse, IRequestParams } from "./common/interface";
import moment from "moment";
import { Chart } from "./components";
import { getData } from "./common/api";
import Present from "./components/Present";

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

  const [data, setData] = useState<IFcstResponse[]>([]);

  useEffect(() => {
    const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
    getData(url).then((res) => {
      setData(res);
      console.log(
        res.filter(
          (item: IFcstResponse) =>
            item.baseDate === moment().format("YYYYMMDD") &&
            item.baseTime === moment().format("HH") + "00"
        )
      );
    });
    console.log(moment().format("HH") + "00");
  }, []);

  return (
    <React.Fragment>
      <Present />
      <Chart data={data} />
    </React.Fragment>
  );
};

export default App;
