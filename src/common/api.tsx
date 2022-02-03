import Axios from "axios";
import { enResponse } from "./enType";
import { IFcstResponse } from "./interface";

const filterTmp = (item: IFcstResponse) => {
  if (item.category === enResponse.TMP) {
    return true;
  } else return false;
};

export const getData = async (url: string) => {
  let result = [];
  await Axios.get(url)
    .then((response) => {
      console.log(response.data[0] === "<" ? "실패" : "33");
      if (response.status === 200) {
        const resData = response.data.response.body.items.item;
        console.log(resData);
        const filtered = resData.filter(filterTmp);
        // console.log("filted:", filtered);
        result = filtered;
      } else {
        console.log("response error");
      }
    })
    .catch((error) => console.log("error:", error));
  return result;
};
