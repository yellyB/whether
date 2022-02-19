import React from "react";
import { IItem } from "../common/interface";
import { numberWithComma } from "../common/utils";

const Item = (props: { data: IItem }) => {
  const { data } = props;

  return (
    <div className="siteList_items">
      <img
        className="siteList_img"
        alt="img"
        src={process.env.PUBLIC_URL + "/images/items/" + data.idx + ".jpg"}
      />
      {data.name}
      {data.brand}
      {data.itemNo}
      {numberWithComma(data.price)}
      <b className="siteList_font">구매하러 가기 {">"} </b>
    </div>
  );
};

export default Item;
