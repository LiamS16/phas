import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "~/modules/shad/components/ui/card";
import EvidenceIcon from "./EvidenceIcon";
import { Checkbox } from "~/modules/shad/components/ui/checkbox";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import type { evidence } from "~/server/api/data/evidence";
import EvidenceButton from "./EvidenceButton";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
}

const EvidenceWrapper = (props: IProps): JSX.Element => {
  return (
    <Card className="h-full rounded-none border-y-0 border-l-0 bg-slate-900 p-4">
      <CardTitle>Evidence</CardTitle>
      <CardContent className="flex flex-col gap-2 px-0">
        {props.evidence.map((e) => (
          <EvidenceButton
            {...e}
            key={e.id}
            // eslint-disable-next-line @typescript-eslint/unbound-method
            toggleEvidence={props.setEvidence}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default EvidenceWrapper;
