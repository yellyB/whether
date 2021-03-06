import { enPTY, enSKY, enSkyState } from "./enType";
import { IFcst } from "./interface";

export const strToNum = (str: string) => {
  return Math.round(Number(str));
};

export const whetherState = (value: IFcst) => {
  if (value.sky === enSKY.구름많음 || value.sky === enSKY.흐림) {
    switch (value.pty) {
      case enPTY.비:
        return enSkyState.rainny1;
      case enPTY.비눈:
        return enSkyState.snowy;
      case enPTY.눈:
        return enSkyState.snowy;
      case enPTY.소나기:
        return enSkyState.rainny1;
      default:
        return value.sky === enSKY.구름많음
          ? enSkyState.cloud
          : enSkyState.cloudy;
    }
  } else {
    switch (value.pty) {
      case enPTY.비:
        return enSkyState.rainny;
      case enPTY.비눈:
        return enSkyState.snow;
      case enPTY.눈:
        return enSkyState.snow;
      case enPTY.소나기:
        return enSkyState.rainny;
      default:
        return enSkyState.sun;
    }
  }
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

// 천단위 콤마
export const numberWithComma = (number: number) => {
  const numWithComma = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numWithComma;
};

export const weekOfDay = (diff: number) => {
  switch (diff) {
    case 1:
      return "내일";
    case 2:
      return "모레";
    case 3:
      return "글피";
    default:
      return "지금";
  }
};
