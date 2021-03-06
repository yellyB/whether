import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/style.css";
import { IFcst, IRequestParams } from "./common/interface";
import moment from "moment";
import {
  Chart,
  Loading,
  Present,
  Time,
  Footer,
  DataLoadFail,
} from "./components";
import { getWhether } from "./common/api";
import _ from "lodash";
import { RecommandContainer } from "./components/recommand";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [params] = useState<IRequestParams>({
    serviceKey: process.env.REACT_APP_API_KEY,
    numOfRows: 1000,
    pageNo: 1,
    dataType: "JSON",
    base_date: moment().format("YYYYMMDD"),
    base_time: "0200",
    nx: 55,
    ny: 127,
  });

  const [corsError] = useState<string>(
    "https://yelly-cors-anywhere.herokuapp.com/"
  );
  const [proxy] = useState<string>("http://apis.data.go.kr");

  const [datas, setDatas] = useState<IFcst[]>([]);
  const [nowValue, setNowValue] = useState<IFcst>({} as any);
  const [nowMin, setNowMin] = useState<number>(0);
  const [nowMax, setNowMax] = useState<number>(0);

  const getData = async (url: string, isDummy: boolean) => {
    let res;
    await getWhether(url, isDummy).then((response) => {
      res = response;
    });
    return res;
  };

  const handleDummyLoadOnClick = () => {
    getData(process.env.PUBLIC_URL + "/datas/dummy.json", true).then(
      (response) => {
        setDatas(response.data);
        setNowValue(response.data !== undefined && response.data[0]);
        setNowMin(response.min);
        setNowMax(response.max);
      }
    );
  };

  useEffect(() => {
    const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${params.serviceKey}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
    getData(corsError + proxy + url, false)
      .then((response) => {
        setDatas(response.data);
        setNowValue(response.data !== undefined && response.data[0]);
        setNowMin(response.min);
        setNowMax(response.max);
      })
      .finally(() => {
        setLoading(false);
      });

    // ????????? ??????
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = "????????? ??????";
  }, []);

  return (
    <div className="app_wrapper">
      {loading && <Loading />}
      {datas.length > 0 || loading ? (
        <div className="app_content">
          <div className="upper_part">
            <div className="time_n_present_wrapper">
              <Time />
              <Present value={nowValue} min={nowMin} max={nowMax} />
            </div>
            <Chart values={datas} />
          </div>
          <RecommandContainer value={nowValue} />
        </div>
      ) : (
        <DataLoadFail dummyLoad={handleDummyLoadOnClick} />
      )}
      <Footer />
    </div>
  );
};

export default App;
