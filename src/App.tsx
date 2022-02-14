import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/style.css";
import { IFcst, IRequestParams } from "./common/interface";
import moment from "moment";
import { Chart, Loading, Recommand, Present, Time } from "./components";
import { getWhether } from "./common/api";
import _ from "lodash";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

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

  const [datas, setDatas] = useState<IFcst[]>([]);
  const [nowValue, setNowValue] = useState<IFcst>({} as any);
  const [nowMin, setNowMin] = useState<number>(0);
  const [nowMax, setNowMax] = useState<number>(0);

  const getData = async (url: string) => {
    await getWhether(url).then((response) => {
      const res = response.data;
      setDatas(response.data);

      //현재 기온
      const now = _.find(res, (item: IFcst) => {
        return (
          item.fcstDate === moment().format("YYYYMMDD") &&
          item.fcstTime === moment().format("HH") + "00"
        );
      });

      setNowValue(now !== undefined && now);
      setNowMin(response.min);
      setNowMax(response.max);
    });
    return true;
  };

  useEffect(() => {
    const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
    getData(url).then((res) => {
      if (res) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "https://mdn.mozillademos.org/files/5405/gallery_4.jpg",
      }}
    >
      {loading && <Loading />}
      <div className="app_content">
        <div className="flex-container">
          <Time />
          <Present value={nowValue} min={nowMin} max={nowMax} />
        </div>
        <Chart values={datas} />
        <Recommand value={nowValue} />
      </div>
    </div>
  );
};

export default App;
