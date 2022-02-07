import React, { useState, useEffect } from "react";
import { ICody, IFcstData } from "../common/interface";
import { getCody } from "../common/api";

const Recommand = (props: { value: IFcstData }) => {
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
    <div className="recommand_wrapper">
      추천 아이템
      <br />
      <div className="recommand_flex-container">
        {data.map((item: string, index: number) => (
          <div className="recommand_flex-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommand;
