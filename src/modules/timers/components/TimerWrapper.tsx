import React from "react";
import CountDown from "./CountDown";

const TimerWrapper = (): JSX.Element => {
  return (
    <div className="-mb-2">
      <CountDown seconds={90} title="Smudge" />
      <CountDown seconds={25} title="Hunt Cooldown" />
    </div>
  );
};

export default TimerWrapper;
