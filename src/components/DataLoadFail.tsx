import React, { useState, useEffect } from "react";

const DataLoadFail = (props: { dummyLoad: Function }) => {
  const { dummyLoad } = props;

  return (
    <div className="dataLoadFail">
      서버와의 통신 문제로 데이터 로드에 실패했습니다.
      <br /> 잠시 후 다시 시도 바랍니다.
      <br />
      <br />
      <button onClick={() => dummyLoad()}>임시 데이터로 보기 {"->"}</button>
    </div>
  );
};

export default DataLoadFail;
