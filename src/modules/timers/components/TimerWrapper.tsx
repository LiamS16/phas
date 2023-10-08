import React from "react";
import CountDown from "./CountDown";

const TimerWrapper = (): JSX.Element => {
  return (
    <div className="w-full">
      <CountDown seconds={10} />
    </div>
  );
};

export default TimerWrapper;