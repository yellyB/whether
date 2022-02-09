import React, { useReducer, createContext, useContext } from "react";
import { getRandomInt } from "../common/utils";

const SiteList = () => {
  return (
    <div className="siteList_wrapper">
      {Array.from({ length: 4 }, (v, i) => i).map((i: number) => (
        <div>
          <img
            className="siteList_img"
            alt="img"
            src={
              process.env.PUBLIC_URL +
              "/images/items/" +
              getRandomInt(i * 10, (i + 1) * 10) +
              ".png"
            }
          />
          <b className="siteList_font">구매하러 가기 {">"} </b>
        </div>
      ))}
    </div>
  );
};

export default SiteList;
