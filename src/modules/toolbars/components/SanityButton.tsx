import React from "react";
import {
  SecondaryEvidenceValue,
  type IGhostSanity,
} from "~/modules/ghosts/types/types";

interface IProps extends IGhostSanity {
  toggle?(): void;
  className?: string;
}

const SanityButton = (props: IProps): JSX.Element => {
  return (
    <button
      className={`flex items-center gap-2 rounded border px-3 py-2 text-base ${
        props.selected === SecondaryEvidenceValue.SELECTED
          ? "box-border border-2 border-blue-400 bg-slate-800"
          : "border-slate-600 text-slate-300"
      } ${props.className}`}
      style={{
        stroke:
          props.selected === SecondaryEvidenceValue.SELECTED ? "#334155" : "",
      }}
    >
      {props.name}{" "}
      <span className="text-sm text-slate-500">{`(>${props.minValue})`}</span>
    </button>
  );
};

export default SanityButton;
