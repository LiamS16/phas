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

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence): void;
}

const EvidenceWrapper = (props: IProps): JSX.Element => {
  return (
    <Card className="h-full rounded-none border-y-0 border-l-0 bg-slate-900 p-4">
      <CardTitle>Evidence</CardTitle>
      <CardContent className="flex flex-col gap-2 px-0">
        {props.evidence.map((e) => (
          <div
            className="flex items-center gap-2"
            key={e.id}
            style={{
              color: ["ruled out", "impossible"].includes(e.value)
                ? "#666"
                : "",
              textDecoration: e.value === "ruled out" ? "line-through" : "",
            }}
          >
            <EvidenceIcon {...e} />
            <h6 className="w-28">{e.name}</h6>
            <Checkbox
              checked={e.value === "selected"}
              onClick={() => props.setEvidence(e.id)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EvidenceWrapper;
