import React, { useState, useEffect } from "react";
import { IFcstData, IFcstResponse } from "../common/interface";
import { strToNum } from "../common/utils";

const Present = (props: {
  value: IFcstData;
  min: IFcstResponse;
  max: IFcstResponse;
  rainPercent: IFcstResponse;
}) => {
  const { value, min, max, rainPercent } = props;

  useEffect(() => {
    // console.log(rainPercent);
  }, []);

  return (
    <div className="present_wrapper">
      <img
        alt="sunny"
        src={process.env.PUBLIC_URL + "/images/" + value.state + ".png"}
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
