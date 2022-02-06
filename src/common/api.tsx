import Axios from "axios";

export const getWhether = async (url: string) => {
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

export const getCody = async () => {
  let result = [];
  await Axios.get(process.env.PUBLIC_URL + "/datas/cody.json")
    .then((response) => {
      result = response.data;
    })
    .catch((error) => console.log("error:", error));
  return result;
};
