import React, { useState, useEffect } from "react";
import { getRandomInt } from "../common/utils";

const SiteList = (props: {}) => {
  console.log(getRandomInt(10, 20));

  return (
    <div className="siteList_wrapper">
      {Array.from({ length: 4 }, (v, i) => i).map((i: number) => (
        <img
          className="siteList_img"
          alt="."
          src={
            process.env.PUBLIC_URL +
            "/images/items/" +
            getRandomInt(i * 10, (i + 1) * 10) +
            ".png"
          }
        />
      ))}
    </div>
  );
};

export default SiteList;
