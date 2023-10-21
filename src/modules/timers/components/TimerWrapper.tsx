import React from "react";
import CountDown from "./CountDown";
import TimerMarker from "./TimerMarker";

const TimerWrapper = (): JSX.Element => {
  return (
    <div className="-mb-2">
      <CountDown seconds={180} title="Smudge">
        <TimerMarker label="Demon" percent={((2 / 3) * 100).toString()} />
        <TimerMarker percent="50" />
        <TimerMarker label="Spirit" percent="0" />
      </CountDown>
      <div className="my-2 border-t" />
      <CountDown seconds={25} title="Hunt Cooldown">
        <TimerMarker label="Demon" percent="20" />
        <TimerMarker percent="0" />
      </CountDown>
    </div>
  );
};

export default TimerWrapper;
