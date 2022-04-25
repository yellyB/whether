import React, { useState, useEffect } from "react";

const Present = () => {
  const [cnt, setCnt] = useState<number>(1);

  const temp = () => {
    setCnt((prev) => {
      if (prev < 3) return prev + 1;
      else return 0;
    });
  };

  const startTimer = () => {
    setInterval(temp, 500);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="app_loading">
      <div className="app_loading_imgs">
        {Array.from({ length: cnt }, (v, i) => i).map((i: number) => (
          <img
            alt="loading"
            src={process.env.PUBLIC_URL + "/images/icon/loading" + i + ".png"}
            className="loading_img"
          />
        ))}
      </div>
    </div>
  );
};

export default Present;