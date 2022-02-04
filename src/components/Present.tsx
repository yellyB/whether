import React, { useState, useEffect } from "react";
import { IFcstResponse } from "../common/interface";

const strToNum = (str: string) => {
  return Math.round(Number(str));
};

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
      Present{value.fcstValue}/{strToNum(min.fcstValue)}/
      {strToNum(max.fcstValue)}/
    </React.Fragment>
  );
};

export default Present;
