import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "~/modules/shad/components/ui/card";
import type { IGhost } from "~/server/api/data/types";
import EvidenceIcon from "../../evidence/components/EvidenceIcon";
import { Info, XCircle } from "lucide-react";

interface IProps {
  ghost: IGhost;
}

const GhostCard = (props: IProps): JSX.Element | null => {
  const [isRuledOut, toggleIsRuledOut] = useState<boolean>(false);

  const { ghost } = props;

  const handleRuleOut = () => {
    toggleIsRuledOut((prev) => !prev);
  };

  return (
    <Card
      className={`flex w-36 flex-col items-center gap-2 ${
        isRuledOut ? "bg-slate-950" : "bg-slate-900"
      }`}
    >
      <CardTitle className={`pt-4 ${isRuledOut ? "text-slate-600" : ""}`}>
        {ghost.name}
      </CardTitle>
      <CardContent className="flex w-full flex-col items-center gap-2">
        <div className="w-full border-b" />
        <div className="flex w-min justify-between gap-2">
          {ghost.evidence.map((e) => (
            <EvidenceIcon
              id={e.evidence.id}
              key={e.evidence.id}
              className="h-4 w-4"
              style={{
                stroke: isRuledOut ? "rgb(71, 85, 105)" : "",
              }}
            />
          ))}
        </div>
        <div
          className={`flex gap-2 whitespace-nowrap text-center text-sm ${
            isRuledOut ? "text-slate-600" : ""
          }`}
        >
          <p>{ghost.huntSanity?.toString().replace(",", " - ")}%</p>
          <p>{ghost.huntSpeed?.toString().replace(",", " - ")} m/s</p>
        </div>
      </CardContent>
      <div className="-mt-5 flex w-full">
        <button className="flex w-1/2 items-center justify-center rounded-bl border border-blue-800 bg-blue-800 bg-opacity-10 p-1 shadow shadow-blue-800">
          <Info className="h-4 w-4 text-blue-600" />
        </button>
        <button
          className="flex w-1/2 items-center justify-center rounded-br border border-red-800 bg-red-800 bg-opacity-10 p-1 shadow shadow-red-800"
          onClick={handleRuleOut}
        >
          <XCircle className="h-4 w-4 text-red-600" />
        </button>
      </div>
    </Card>
  );
};

export default GhostCard;
