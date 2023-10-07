import React from "react";
import { Card, CardTitle } from "~/modules/shad/components/ui/card";
import type { IGhost } from "~/server/api/data/types";
import EvidenceIcon from "../../evidence/components/EvidenceIcon";

interface IProps {
  ghost: IGhost;
}

const GhostCard = (props: IProps): JSX.Element | null => {
  const { ghost } = props;

  return (
    <Card className="h-14 w-48 bg-slate-900 p-2">
      <div className="flex justify-between">
        <CardTitle>{ghost.name}</CardTitle>
        <div className="flex w-12 justify-between">
          {ghost.evidence
            .filter((e) => !e.hidden)
            .map((e) => (
              <EvidenceIcon
                id={e.evidence.id}
                key={e.evidence.id}
                className="h-6 w-6"
              />
            ))}
        </div>
      </div>
    </Card>
  );
};

export default GhostCard;
