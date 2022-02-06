import React, { useState, useEffect } from "react";
import { ICody } from "../common/interface";
import { getCody } from "../common/api";

const Recommand = (props: {}) => {
  const [data, setData] = useState<ICody[]>([]);

  const getData = () => {
    return getCody().then((response) => {
      return response;
    });
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <React.Fragment>
      추천 코디
      <br />
      {data.map((item: ICody) => item.cloths)}
    </React.Fragment>
  );
};

export default Recommand;
