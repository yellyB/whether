import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import "./style.css";
import { IFcstResponse, IRequestParams } from "./common/interface";
import moment from "moment";
import { Chart, Recommand } from "./components";
import { getWhether } from "./common/api";
import Present from "./components/Present";
import { enResponse } from "./common/enType";
import _ from "lodash";

const filterTmp = (item: IFcstResponse) => {
  if (item.category === enResponse.TMP) {
    return true;
  } else return false;
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

  const [data, setData] = useState<IFcstResponse[]>([]);
  const [nowValue, setNowValue] = useState<IFcstResponse>({} as any);
  const [nowMin, setNowMin] = useState<IFcstResponse>({} as any);
  const [nowMax, setNowMax] = useState<IFcstResponse>({} as any);
  const [rainfall, setRainfall] = useState<IFcstResponse>({} as any);

  const getData = (url: string) => {
    getWhether(url).then((res) => {
      const filtered = res.filter(filterTmp);
      setData(filtered);

      const now = _.find(res, (item: IFcstResponse) => {
        return (
          item.fcstDate === moment().format("YYYYMMDD") &&
          item.fcstTime === moment().format("HH") + "00"
        );
      });

      const min = _.find(res, (item: IFcstResponse) => {
        return item.category === enResponse.TMN;
      });

      const max = _.find(res, (item: IFcstResponse) => {
        return item.category === enResponse.TMX;
      });
      setNowValue(now !== undefined && now);
      setNowMin(min !== undefined && min);
      setNowMax(max !== undefined && max);
    });
  };

  useEffect(() => {
    const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
    getData(url);
  }, []);

  return (
    <div className="app_wrapper">
      <Present value={nowValue} min={nowMin} max={nowMax} />
      <Chart data={data} />
      <Recommand value={nowValue} />
    </div>
  );
};

export default App;
