import React from "react";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import EvidenceIcon from "./EvidenceIcon";
import { Hand } from "lucide-react";
import type { evidence } from "~/server/api/data/types";
import { EVIDENCEVALUE } from "~/modules/ghosts/types/evidenceValue";

interface IProps extends IMenuEvidence {
  toggleEvidence(id: evidence, value: IMenuEvidence["value"]): void;
}

const EvidenceButton = (props: IProps): JSX.Element => {
  let classes = "";
  const monkeyPaw = false;

  const handleClick = () => {
    let val: IMenuEvidence["value"];

    switch (props.value) {
      case EVIDENCEVALUE.POSSIBLE:
        val = EVIDENCEVALUE.SELECTED;
        break;
      case EVIDENCEVALUE.RULED_OUT:
        val = EVIDENCEVALUE.POSSIBLE;
        break;
      case EVIDENCEVALUE.SELECTED:
        val = EVIDENCEVALUE.RULED_OUT;
        break;
      default:
        val = EVIDENCEVALUE.POSSIBLE;
    }

    props.toggleEvidence(props.id, val);
  };

  switch (props.value) {
    case EVIDENCEVALUE.IMPOSSIBLE:
      classes = "border-red-700 bg-red-950";
      break;
    case EVIDENCEVALUE.POSSIBLE:
      classes = "border-slate-600 text-slate-300";
      break;
    case EVIDENCEVALUE.RULED_OUT:
      classes = "border-slate-700 bg-slate-950 line-through text-slate-700";
      break;
    case EVIDENCEVALUE.SELECTED:
      classes = "border-blue-400 border-2 bg-slate-800";
      break;
  }

  return (
    <button
      className={`flex items-center gap-2 rounded border px-3 py-2 text-base ${classes}`}
      onClick={handleClick}
    >
      <EvidenceIcon
        id={props.id}
        style={{
          stroke: [EVIDENCEVALUE.IMPOSSIBLE, EVIDENCEVALUE.RULED_OUT].includes(
            props.value,
          )
            ? "#334155"
            : "",
        }}
      />
      <span className="w-28 text-left">{props.name}</span>
      {monkeyPaw && (
        <Hand className="fill-black stroke-slate-700 hover:cursor-not-allowed" />
      )}
    </button>
  );
};

export default EvidenceButton;
