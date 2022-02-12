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

  const [skyState, setSkyState] = useState<enSkyState>(enSkyState.sun);

  useEffect(() => {
    whetherState(value.fcstValue, rainPercent.fcstValue);
    if (Number(value.fcstValue) <= -4) {
      setSkyState(enSkyState.snow);
    } else if (Number(rainPercent.fcstValue) >= 70) {
      setSkyState(enSkyState.rain);
    }
  }, [props]);

  return (
    <div className="present_wrapper">
      <img
        alt="sunny"
        src={process.env.PUBLIC_URL + "/images/whether/" + skyState + ".png"}
        className="present_whether_img"
      />
      <div className="present_text">
        <div className="present_current_text">{value.fcstValue}℃</div>
        <div className="present_other_text">
          {strToNum(min.fcstValue)}℃ / {strToNum(max.fcstValue)}℃
          <br />
          <img
            alt="rainPer"
            src={process.env.PUBLIC_URL + "/images/whether/rainPer.png"}
            className="present_rainPer_img"
          />
          {rainPercent.fcstValue}%
        </div>
      </div>
    </div>
  );
};

export default Present;
