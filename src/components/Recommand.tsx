import React, { useState, useEffect } from "react";
import { ICody, IFcst } from "../common/interface";
import { getCody } from "../common/api";
import { SiteList } from ".";

const Recommand = (props: { value: IFcst }) => {
  const { value } = props;

  const [data, setData] = useState<string[]>([]);
  const [key, setKey] = useState<number>(0);

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
          if (value.tmp >= r.value) {
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
    <>
      <div className="recommand_wrapper">
        <span className="recommand_text">추천 아이템</span>
        <br />
        <div className="recommand_flex-container">
          {data.map((item: string, index: number) => (
            <div
              className={
                key === index
                  ? "recommand_flex-item recommand_flex-item_selected"
                  : "recommand_flex-item"
              }
              key={index}
              onClick={() => setKey(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <SiteList key={key} />
    </>
  );
};

export default Recommand;
