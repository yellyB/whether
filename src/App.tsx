import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/style.css";
import { IFcst, IRequestParams } from "./common/interface";
import moment from "moment";
import { Chart, Loading, Present, Time, Footer } from "./components";
import { getCody, getWhether } from "./common/api";
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

  const [datas, setDatas] = useState<IFcst[]>([]);
  const [nowValue, setNowValue] = useState<IFcst>({} as any);
  const [nowMin, setNowMin] = useState<number>(0);
  const [nowMax, setNowMax] = useState<number>(0);

  const getData = async (url: string) => {
    await getWhether(url).then((response) => {
      const res = response.data;
      setDatas(response.data);

      //현재 기온
      // const now = _.find(res, (item: IFcst) => {
      //   return (
      //     item.fcstDate === moment().format("YYYYMMDD") &&
      //     item.fcstTime === moment().format("HH") + "00"
      //   );
      // });

      setNowValue(res !== undefined && res[0]);
      setNowMin(response.min);
      setNowMax(response.max);
    });
    return true;
  };

  useEffect(() => {
    const temp =
      "REACT_APP_API_KEY = rSzra4lWkesK5rHQ2eKEjLr46yqb%2BstwqooY4ckqtC%2FL26xtiLJpHsugsba3jq2BfWyHdzC4DEYXU%2Bfsf41a7w%3D%3D";
    const url = `/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${temp}&pageNo=1&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;
    // getData(url).then((res) => {
    //   if (res) {
    //     setLoading(false);
    //   }
    // });
    alert("f1f");
    getCody().then((res) => {
      console.log(res);
    });

    // 타이틀 변경
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = "날씨의 참견";
  }, []);

  return (
    <div className="app_wrapper">
      {/* {loading && <Loading />} */}
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
      <Footer />
    </div>
  );
};

export default App;
