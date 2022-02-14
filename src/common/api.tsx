import Axios from "axios";
import { enResponse } from "./enType";
import { IFcst, IFcstData } from "./interface";
import _ from "lodash";
import { strToNum } from "./utils";

const filterData = (item: IFcstData, type) => {
  if (item.category === type) {
    return true;
  } else return false;
};

export const getWhether = async (url: string) => {
  let result = [];
  let res: any = {
    data: [],
    min: 0,
    max: 0,
  };

  await Axios.get(url)
    .then(async (response) => {
      console.log(response.data[0] === "<" ? "실패" : "성공");
      if (response.status === 200) {
        const resData: IFcstData[] = response.data.response.body.items.item;
        console.log(resData);

        const list = [];

        let date = "";
        let time = "";
        let tmp = 0,
          pop = 0,
          pty = 0,
          sky = 0;

        resData.forEach((item) => {
          if (time !== item.fcstTime) {
            const temp = {
              fcstDate: date,
              fcstTime: time,
              tmp: tmp,
              pop: pop,
              pty: pty,
              sky: sky,
            };
            if (time !== "") list.push(temp);
            date = item.fcstDate;
            time = item.fcstTime;
            tmp = Number(item.fcstValue);
          } else {
            if (item.category === "POP") pop = Number(item.fcstValue);
            else if (item.category === "PTY") pty = Number(item.fcstValue);
            else if (item.category === "SKY") sky = Number(item.fcstValue);
          }
        });

        const temp = {
          fcstDate: date,
          fcstTime: time,
          tmp: tmp,
          pop: pop,
          pty: pty,
          sky: sky,
        };
        list.push(temp);

        result = resData;

        //오늘 최저
        const min = await _.find(resData, (item: IFcstData) => {
          return item.category === enResponse.TMN;
        });

        //오늘 최고
        const max = await _.find(resData, (item: IFcstData) => {
          return item.category === enResponse.TMX;
        });

        res.min = strToNum(min.fcstValue);
        res.max = strToNum(max.fcstValue);
        res.data = list;
      } else {
        console.log("response error");
      }
    })
    .catch((error) => console.log("error:", error));
  return res;
};

export const getCody = async () => {
  let result = [];
  await Axios.get(process.env.PUBLIC_URL + "/datas/cody.json")
    .then((response) => {
      result = response.data;
    })
    .catch((error) => console.log("error:", error));
  return result;
};
