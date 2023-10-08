import React from "react";

interface IProps {
  label: string;
  percent: string;
}

const TimerMarker = (props: IProps): JSX.Element => {
  return (
    <div
      className="absolute"
      style={{ transform: `translate(${props.percent}%, 0px)` }}
    >
      <div className="relative h-7 w-[1px] bg-slate-400">
        <p className="relative top-3.5 ml-1 text-xs text-slate-400">
          {props.label}
        </p>
      </div>
    </div>
  );
};

export default TimerMarker;
