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
  let result: any = {
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

        const timeData = {
          fcstDate: resData[0].fcstDate,
          fcstTime: resData[0].fcstTime,
          tmp: Number(resData[0].fcstValue),
          pop: 0,
          pty: 0,
          sky: 0,
        };

        resData.forEach((item) => {
          if (timeData.fcstTime !== item.fcstTime) {
            timeData.fcstDate = item.fcstDate;
            timeData.fcstTime = item.fcstTime;
            timeData.tmp = Number(item.fcstValue);
            list.push({ ...timeData });
          } else {
            if (item.category === "POP") timeData.pop = Number(item.fcstValue);
            else if (item.category === "PTY")
              timeData.pty = Number(item.fcstValue);
            else if (item.category === "SKY")
              timeData.sky = Number(item.fcstValue);
          }
        });

        list.push({ ...timeData });
        console.log(list);

        //오늘 최저
        const min = await _.find(resData, (item: IFcstData) => {
          return item.category === enResponse.TMN;
        });

        //오늘 최고
        const max = await _.find(resData, (item: IFcstData) => {
          return item.category === enResponse.TMX;
        });

        result.min = strToNum(min.fcstValue);
        result.max = strToNum(max.fcstValue);
        result.data = list;
      } else {
        console.log("response error");
      }
    })
    .catch((error) => console.log("error:", error));
  return result;
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

export const getItems = async () => {
  let result = [];
  await Axios.get(process.env.PUBLIC_URL + "/datas/items.json")
    .then((response) => {
      result = response.data;
    })
    .catch((error) => console.log("error:", error));
  return result;
};
