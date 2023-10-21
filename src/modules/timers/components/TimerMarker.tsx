import React from "react";

interface IProps {
  label?: string;
  percent: string;
}

const TimerMarker = (props: IProps): JSX.Element => {
  return (
    <div
      style={{
        position: "absolute",
        left: props.percent + "%",
      }}
    >
      <div className="relative -top-0.5 h-6 w-0 border-l border-dotted border-white">
        <p className="relative top-2.5 ml-1 text-xs text-slate-400">
          {props.label}
        </p>
      </div>
    </div>
  );
};

export default TimerMarker;
