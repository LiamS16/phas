import React from "react";
import {
  type GhostSpeed,
  SecondaryEvidenceValue,
} from "~/modules/ghosts/types/types";

interface IProps {
  title: string;
  active: SecondaryEvidenceValue;
  className?: string;
  toggleGhostSpeed(speed: GhostSpeed, value: SecondaryEvidenceValue): void;
  val: GhostSpeed;
}

const SpeedButton = (props: IProps): JSX.Element => {
  const handleClick = () => {
    if (props.active === SecondaryEvidenceValue.IMPOSSIBLE) return;

    const newVal =
      props.active === SecondaryEvidenceValue.POSSIBLE
        ? SecondaryEvidenceValue.SELECTED
        : SecondaryEvidenceValue.POSSIBLE;
    props.toggleGhostSpeed(props.val, newVal);
  };

  return (
    <button
      className={`flex items-center gap-2 rounded border px-3 py-2 text-base ${
        props.active
          ? "box-border border-2 border-blue-400 bg-slate-800"
          : "border-slate-600 text-slate-300"
      } ${props.className}`}
      style={{ stroke: props.active ? "#334155" : "" }}
      // eslint-disable-next-line @typescript-eslint/unbound-method
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
};

export default SpeedButton;
