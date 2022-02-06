import React, { useState, useEffect } from "react";
import { ICody, IFcstResponse } from "../common/interface";
import { getCody } from "../common/api";

const Recommand = (props: { value: IFcstResponse }) => {
  const { value } = props;

  const [data, setData] = useState<string[]>([]);

  const getData = () => {
    return getCody().then((response) => {
      return response;
    });
  };

  useEffect(() => {
    getData()
      .then((res) => {
        let cody = res[res.length - 1];
        for (const r of res) {
          if (Number(value.fcstValue) >= r.value) {
            cody = value;
            return;
          }
        }
        setData(cody.cloths.split(","));
      })
      .catch(() => {
        console.log("error from component [Recommand]");
      });
  }, [value]);

  return (
    <React.Fragment>
      추천 코디
      <br />
      <div className="flex-container">
        {data.map((item: string, index: number) => (
          <div className="flex-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Recommand;
