import { enSkyState } from "./enType";

export const strToNum = (str: string) => {
  return Math.round(Number(str));
};

export const whetherState = (temporature: string, rain: string) => {
  if (Number(temporature) >= 0) {
    return enSkyState.sunny;
  } else return enSkyState.cloudy;
};
