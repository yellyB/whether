import React, { useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";
import "./App.less";
import "./style.css";
import { IFcstResponse, IRequestParams } from "./common/interface";
import { enResponse } from "./common/enType";
import moment from "moment";
import { Chart } from "./components";

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

  useEffect(() => {
    getData(url).then((res) => setData(res));
  }, []);

  return (
    <React.Fragment>
      <Chart data={data} />
    </React.Fragment>
  );
};

export default App;
