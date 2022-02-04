import Axios from "axios";
import { enResponse } from "./enType";
import { IFcstResponse } from "./interface";

export const getData = async (url: string) => {
  let result = [];
  await Axios.get(url)
    .then((response) => {
      console.log(response.data[0] === "<" ? "실패" : "성공");
      if (response.status === 200) {
        const resData = response.data.response.body.items.item;
        console.log(resData);
        result = resData;
      } else {
        console.log("response error");
      }
    })
    .catch((error) => console.log("error:", error));
  return result;
};
