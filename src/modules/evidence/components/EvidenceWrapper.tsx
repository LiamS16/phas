import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "~/modules/shad/components/ui/card";
import type { IEvidence } from "~/server/api/data/types";
import EvidenceIcon from "./EvidenceIcon";

interface IProps {
  evidence: IEvidence[];
}

const EvidenceWrapper = (props: IProps): JSX.Element => {
  return (
    <Card className="h-full rounded-none border-y-0 border-l-0 bg-slate-900 p-4">
      <CardTitle>Evidence</CardTitle>
      <CardContent className="flex flex-col gap-2 px-0">
        {props.evidence.map((e) => (
          <div className="flex gap-2" key={e.id}>
            <EvidenceIcon {...e} />
            <h6 className="w-40">{e.name}</h6>
            <input type="checkbox" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EvidenceWrapper;
