import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "~/modules/shad/components/ui/card";
import type { IGhost } from "~/server/api/data/types";
import EvidenceIcon from "../../evidence/components/EvidenceIcon";

interface IProps {
  ghost: IGhost;
}

const GhostCard = (props: IProps): JSX.Element | null => {
  const { ghost } = props;

  return (
    <Card className="flex w-36 flex-col items-center gap-2 bg-slate-900">
      <CardTitle className="pt-4">{ghost.name}</CardTitle>
      <CardContent className="flex w-full flex-col items-center gap-2">
        <div className="w-full border-b" />
        <div className="flex w-min justify-between gap-2">
          {ghost.evidence.map((e) => (
            <EvidenceIcon
              id={e.evidence.id}
              key={e.evidence.id}
              className="h-4 w-4"
            />
          ))}
        </div>
        <div className="flex gap-2 whitespace-nowrap text-center text-sm">
          <p>{ghost.huntSanity?.toString().replace(",", " - ")}%</p>
          <p>{ghost.huntSpeed?.toString().replace(",", " - ")} m/s</p>
        </div>
      </CardContent>
      <div className="-mt-5 flex w-full">
        <button className="w-1/2 rounded-bl border border-blue-800 bg-blue-800 bg-opacity-10 shadow shadow-blue-800">
          I
        </button>
        <button className="w-1/2 rounded-br border border-red-800 bg-red-800 bg-opacity-10 shadow shadow-red-800">
          X
        </button>
      </div>
    </Card>
  );
};

export default GhostCard;
