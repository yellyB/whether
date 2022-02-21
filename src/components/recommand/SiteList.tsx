import React, { useState, useEffect } from "react";
import { getItems } from "../../common/api";
import { IItem } from "../../common/interface";
import { getRandomInt } from "../../common/utils";
import Item from "./Item";

const getData = () => {
  return getItems().then((response) => {
    return response;
  });
};

const SiteList = () => {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setItems(res);
      })
      .catch(() => {
        console.log("error from component [SiteList]");
      });
  }, []);

  return (
    <div className="siteList_wrapper">
      {items.length > 0 &&
        Array.from({ length: 4 }, (v, i) => i).map((i: number) => (
          <Item data={items[getRandomInt(i * 10, (i + 1) * 10)]} />
        ))}
    </div>
  );
};

export default SiteList;
