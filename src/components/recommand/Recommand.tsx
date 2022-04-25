import React, { useState, useEffect, useLayoutEffect } from "react";
import { ICody, IFcst } from "../../common/interface";
import { getCody } from "../../common/api";

const RecommandList = (props: {
  value: IFcst;
  keys: string;
  setKey: Function;
}) => {
  const { value, keys, setKey } = props;

  const [data, setData] = useState<string[]>([]);

  const getData = () => {
    return getCody().then((response) => {
      return response;
    });
  };

  const getNowCody = async () => {
    let cody;
    await getData()
      .then((res) => {
        for (const r of res) {
          if (value.tmp >= r.value) {
            cody = r;
            return;
          }
        }
      })
      .catch(() => {
        console.log("error from component [Recommand]");
      });
    return cody;
  };

  useLayoutEffect(() => {
    getNowCody().then((nowCody) => {
      if (nowCody) {
        const splited = nowCody.cloths.split(",");
        setData(splited);
        setKey(splited[0]);
      }
    });
  }, [value]);

  return (
    <>
      <div className="recommand_flex_wrapper">
        {data.map((item: string, index: number) => (
          <div
            className={
              keys === item
                ? "recommand_flex_item recommand_flex_item_selected"
                : "recommand_flex_item"
            }
            key={item}
            onClick={(e) => setKey(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommandList;
