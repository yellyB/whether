import React, { useState } from "react";
import { IFcst } from "../../common/interface";
import RecommandList from "./Recommand";
import SiteList from "./SiteList";
import Divider from "./Divider";

const RecommandContainer = (props: { value: IFcst }) => {
  const [key, setKey] = useState<number>(0);

  return (
    <div className="temp">
      <Divider />
      <div className="recommand_wrapper">
        <RecommandList
          value={props.value}
          keys={key}
          setKey={(val) => {
            setKey(val);
          }}
        />
        <SiteList key={key} />
      </div>
    </div>
  );
};

export default RecommandContainer;
