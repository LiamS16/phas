import React from "react";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import type { evidence } from "~/server/api/data/evidence";
import EvidenceIcon from "./EvidenceIcon";
import { Hand } from "lucide-react";

interface IProps extends IMenuEvidence {
  toggleEvidence(id: evidence): void;
}

const EvidenceButton = (props: IProps): JSX.Element => {
  let classes = "";
  const monkeyPaw = false;

  switch (props.value) {
    case "impossible":
      classes = "border-red-700 bg-red-950";
      break;
    case "possible":
      classes = "border-slate-600 text-slate-300";
      break;
    case "ruled out":
      classes = "border-slate-700 bg-slate-950";
      break;
    case "selected":
      classes = "border-blue-400 border-2 bg-slate-800";
      break;
  }

  return (
    <button
      className={`flex items-center gap-2 rounded border px-2 py-1 text-base ${classes}`}
      onClick={() => props.toggleEvidence(props.id)}
    >
      <EvidenceIcon id={props.id} />
      <span className="w-28 text-left">{props.name}</span>
      {monkeyPaw && (
        <Hand className="fill-black stroke-slate-700 hover:cursor-not-allowed" />
      )}
    </button>
  );
};

export default EvidenceButton;
