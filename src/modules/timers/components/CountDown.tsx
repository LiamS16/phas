import React from "react";
import { useTimer } from "../hooks/useTimer";
import { Pause, Play, TimerReset } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

interface IProps {
  seconds: number;
}

const CountDown = (props: IProps): JSX.Element => {
  const { endTimer, expires, startTimer, isCounting, pauseTimer } = useTimer(
    props.seconds,
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        {isCounting ? (
          <button onClick={pauseTimer}>
            <Pause />
          </button>
        ) : (
          <div>
            <button onClick={startTimer}>
              <Play />
            </button>
            <button onClick={endTimer}>
              <TimerReset />
            </button>
          </div>
        )}
        <time>
          {expires !== null ? dayjs(expires).utc().format("m:ss") : "0:00"}
        </time>
      </div>
      <div className="h-1 w-full rounded bg-white"></div>
    </div>
  );
};

export default CountDown;
