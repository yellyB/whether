import React, { useState, useEffect } from "react";
import { IFcstResponse } from "../common/interface";
import { strToNum } from "../common/utils";

const Present = (props: {
  value: IFcstResponse;
  min: IFcstResponse;
  max: IFcstResponse;
}) => {
  const { value, min, max } = props;

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <React.Fragment>
      현재 기온:{value.fcstValue}
      <br />
      오늘 최저:{strToNum(min.fcstValue)}
      <br /> 오늘 최고:
      {strToNum(max.fcstValue)}
    </React.Fragment>
  );
};

export default Present;
