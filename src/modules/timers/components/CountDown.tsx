import React from "react";
import { useTimer } from "../hooks/useTimer";
import { Play, TimerReset } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import * as Progress from "@radix-ui/react-progress";

dayjs.extend(utc);

interface IProps {
  seconds: number;
  title: string;
  children: React.ReactNode;
}

const CountDown = (props: IProps): JSX.Element => {
  const { endTimer, expires, startTimer, isCounting } = useTimer(props.seconds);

  return (
    <div className="mb-8 flex flex-col">
      <h2 className="text-base">{props.title}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {isCounting ? (
            <button onClick={endTimer}>
              <TimerReset className="h-5 w-5 stroke-slate-400" />
            </button>
          ) : (
            <button onClick={startTimer}>
              <Play className="h-5 w-5 stroke-slate-400" />
            </button>
          )}
          <time className="font-mono">
            {expires !== null ? dayjs(expires).utc().format("m:ss") : "0:00"}
          </time>
        </div>
        <Progress.Root className="h-1 w-full overflow-hidden rounded bg-slate-800">
          <Progress.Indicator
            className="relative h-1 w-full rounded bg-slate-400 transition-all duration-1000"
            style={{
              transform: `translateX(-${
                100 - (expires ? Math.floor(expires / 10 / props.seconds) : 100)
              }%)`,
            }}
          />
        </Progress.Root>
        {/* Progress labels */}
        <div className="relative -mt-2 w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default CountDown;
