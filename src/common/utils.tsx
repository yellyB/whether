import { enSkyState } from "./enType";

export const strToNum = (str: string) => {
  return Math.round(Number(str));
};

export const whetherState = (temporature: number, rain: number) => {
  if (temporature >= 0) {
    return enSkyState.sunny;
  } else return enSkyState.cloudy;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};
