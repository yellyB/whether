import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.less";
import "./style.css";
import { IFcstResponse, IRequestParams } from "./common/interface";
import { enResponse } from "./common/enType";
import moment from "moment";

const App = () => {
  const [params, setParams] = useState<IRequestParams>({
    serviceKey: process.env.REACT_APP_API_KEY,
    numOfRows: 1000,
    pageNo: 1,
    dataType: "JSON",
    base_date: "20220130",
    base_time: "0500",
    nx: 55,
    ny: 127,
  });
  const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

  const filterTmp = (item: IFcstResponse) => {
    if (item.category === enResponse.TMP) {
      return true;
    } else return false;
  };

  const getData = () => {
    Axios.get(url)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const resData = response.data.response.body.items.item;
          console.log(resData);
          const filted = resData.filter(filterTmp);
          console.log("filted:", filted);
        } else {
          console.log("response error");
        }
      })
      .catch((error) => console.log("error:", error));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
    console.log("start");
    getData();
  }, []);

  return <React.Fragment>fsdfsdf</React.Fragment>;
};

export default App;
