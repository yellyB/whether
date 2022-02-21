import React from "react";
import { IItem } from "../../common/interface";
import { numberWithComma } from "../../common/utils";

const Item = (props: { data: IItem }) => {
  const { data } = props;

  return (
    <div className="siteList_items">
      <div className="item_flex-container">
        <img
          className="item_img"
          alt="img"
          src={process.env.PUBLIC_URL + "/images/items/" + data.idx + ".jpg"}
        />
      </div>
      <div className="item_flex-container">
        <span className="item_font1">{data.name}</span>
        <br />
        <span className="item_font2">
          {data.brand} [{data.itemNo}]
        </span>
        <br />
        <span className="item_font3">{numberWithComma(data.price)}</span>
        <br />
        <span className="item_font4">구매하러 가기 {">"} </span>
      </div>
    </div>
  );
};

export default Item;
