import React, { useState, useEffect } from "react";
import "./App.css";
import "./style.css";
import { IFcstData, IRequestParams } from "./common/interface";
import moment from "moment";
import { Chart, Loading, Recommand, Present, Time } from "./components";
import { getWhether } from "./common/api";
import { enResponse } from "./common/enType";
import _ from "lodash";
import { url } from "inspector";

const filterData = (item: IFcstData, type) => {
  if (item.category === type) {
    return true;
  } else return false;
};

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

  const [temporatures, setTemporatures] = useState<IFcstData[]>([]);
  const [rains, setRains] = useState<IFcstData[]>([]);
  const [nowValue, setNowValue] = useState<IFcstData>({} as any);
  const [nowMin, setNowMin] = useState<IFcstData>({} as any);
  const [nowMax, setNowMax] = useState<IFcstData>({} as any);
  const [rainPercent, setRainPercent] = useState<IFcstData>({} as any);

  const getData = async (url: string) => {
    await getWhether(url).then((res) => {
      //기온만 뽑아내기
      const onlyTemporature = res.filter((item) =>
        filterData(item, enResponse.TMP)
      );
      setTemporatures(onlyTemporature);

      //강수확률만 뽑아내기
      const onlyRain = res.filter((item) => filterData(item, enResponse.POP));
      setRains(onlyRain);

      //현재 기온
      const now = _.find(onlyTemporature, (item: IFcstData) => {
        return (
          item.fcstDate === moment().format("YYYYMMDD") &&
          item.fcstTime === moment().format("HH") + "00"
        );
      });
      //현재 강수확률
      const rain = _.find(onlyRain, (item: IFcstData) => {
        return (
          item.fcstDate === moment().format("YYYYMMDD") &&
          item.fcstTime === moment().format("HH") + "00"
        );
      });

      //오늘 최저
      const min = _.find(res, (item: IFcstData) => {
        return item.category === enResponse.TMN;
      });

      //오늘 최고
      const max = _.find(res, (item: IFcstData) => {
        return item.category === enResponse.TMX;
      });

      setNowValue(now !== undefined && now);
      setNowMin(min !== undefined && min);
      setNowMax(max !== undefined && max);
      setRainPercent(rain !== undefined && rain);
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
      {String(loading)}
      <div className="flex-container">
        <Time />
        <Present
          value={nowValue}
          min={nowMin}
          max={nowMax}
          rainPercent={rainPercent}
        />
      </div>
      <Chart temporatures={temporatures} rains={rains} />
      <Recommand value={nowValue} />
    </div>
  );
};

export default App;
