import React, { useState, useEffect } from "react";
import { enSkyState } from "../common/enType";
import { IFcst } from "../common/interface";
import { whetherState } from "../common/utils";

const Present = (props: { value: IFcst; min: number; max: number }) => {
  const { value, min, max } = props;

  const [skyState, setSkyState] = useState<enSkyState>(enSkyState.sun);

  useEffect(() => {
    setSkyState(whetherState(value));
  }, [value]);

  return (
    <div className="present_wrapper">
      <img
        alt="sunny"
        src={process.env.PUBLIC_URL + "/images/whether/" + skyState + ".png"}
        className="present_whether_img"
      />
      <div className="present_text">
        <div className="present_current_text">{value.tmp}℃</div>
        <div className="present_other_text">
          {min}℃ / {max}℃
          <br />
          <img
            alt="rainPer"
            src={process.env.PUBLIC_URL + "/images/whether/rainPer.png"}
            className="present_rainPer_img"
          />
          {value.pop}%
        </div>
      </div>
    </div>
  );
};

export default Present;
