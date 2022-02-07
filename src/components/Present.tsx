import React, { useState, useEffect } from "react";
import { enSkyState } from "../common/enType";
import { IFcstData } from "../common/interface";
import { strToNum, whetherState } from "../common/utils";

const Present = (props: {
  value: IFcstData;
  min: IFcstData;
  max: IFcstData;
  rainPercent: IFcstData;
}) => {
  const { value, min, max, rainPercent } = props;

  const [skyState, setSkyState] = useState<enSkyState>(enSkyState.sunny);

  useEffect(() => {
    console.log(rainPercent.fcstValue);
    whetherState(value.fcstValue, rainPercent.fcstValue);
  }, [props]);

  return (
    <div className="present_wrapper">
      <img
        alt="sunny"
        src={process.env.PUBLIC_URL + "/images/" + skyState + ".png"}
        className="whetherState_img"
      />
      <div>
        <b className="present_current_text">{value.fcstValue}℃</b>
        <br />
        {strToNum(min.fcstValue)}℃ / {strToNum(max.fcstValue)}℃
        <br />
        강수확률 {rainPercent.fcstValue}%
      </div>
    </div>
  );
};

export default Present;
