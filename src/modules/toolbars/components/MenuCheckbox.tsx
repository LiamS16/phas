import React from "react";
import type { GhostSpeed } from "~/modules/ghosts/types/types";

interface IProps {
  title: string;
  icon?: JSX.Element;
  active?: boolean;
  className?: string;
  toggleGhostSpeed(speed: GhostSpeed, value: boolean): void;
  val: GhostSpeed;
}

const MenuCheckbox = (props: IProps): JSX.Element => {
  return (
    <button
      className={`flex items-center gap-2 rounded border px-3 py-2 text-base ${
        props.active
          ? "box-border border-2 border-blue-400 bg-slate-800"
          : "border-slate-600 text-slate-300"
      } ${props.className}`}
      style={{ stroke: props.active ? "#334155" : "" }}
      // eslint-disable-next-line @typescript-eslint/unbound-method
      onClick={() => props.toggleGhostSpeed(props.val, !props.active)}
    >
      {props.icon}
      {props.title}
    </button>
  );
};

export default MenuCheckbox;
