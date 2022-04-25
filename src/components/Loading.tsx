import React, { useState, useEffect, useRef } from "react";

const Present = () => {
  const timerId = useRef(null);

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
    // startTimer();

    timerId.current = setInterval(temp, 500);
    return () => clearInterval(timerId.current);
    // return () => {
    //   // clearInterval(startTimer)
    // };
  }, []);

  return (
    <div className="app_loading">
      <div className="app_loading_imgs">
        {Array.from({ length: cnt }, (v, i) => i).map((i: number) => (
          <img
            alt="loading"
            src={process.env.PUBLIC_URL + "/images/icon/loading" + i + ".png"}
            className="loading_img"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Present;
