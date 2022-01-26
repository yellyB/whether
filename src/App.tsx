import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./App.less";
import "./style.css";

const App = () => {
  const [params, setParams] = useState<[]>({
    serviceKey: process.env.REACT_APP_API_KEY,
    numOfRows: 50,
    pageNo: 1,
    dataType: "JSON",
    base_date: "20220126",
    base_time: "0500",
    nx: 55,
    ny: 127,
  });
  const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

  useEffect(() => {
    Axios.get(url).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  }, []);

  return <React.Fragment>fsdfsdf</React.Fragment>;
};

export default App;
