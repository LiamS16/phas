import React from "react";
import { Card, CardTitle } from "~/modules/shad/components/ui/card";
import type { IGhost } from "~/server/api/data/types";
import EvidenceIcon from "../../evidence/components/EvidenceIcon";

const GhostCard = (props: IGhost): JSX.Element => {
  return (
    <Card className="bg-slate-900 p-2">
      <div className="flex justify-between">
        <CardTitle>{props.name}</CardTitle>
        <div className="flex w-20 justify-between">
          {props.evidence.map((e) => (
            <EvidenceIcon id={e.evidence.id} key={e.evidence.id} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default GhostCard;
