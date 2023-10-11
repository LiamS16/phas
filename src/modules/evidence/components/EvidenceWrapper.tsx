import React from "react";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import EvidenceButton from "./EvidenceButton";
import type { evidence } from "~/server/api/data/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/modules/shad/components/ui/select";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
  numOfEvidence: number;
  setNumOfEvidence(val: number): void;
}

const EvidenceWrapper = (props: IProps): JSX.Element => {
  const handleChange = (val: string) => {
    props.setNumOfEvidence(parseInt(val));
  };

  return (
    <div className="-mb-4 flex flex-col gap-2 py-2">
      <h2>Number of evidence:</h2>
      <Select
        value={props.numOfEvidence.toString()}
        onValueChange={(e) => handleChange(e)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="0">0</SelectItem>
        </SelectContent>
      </Select>
      {props.evidence.map((e) => (
        <EvidenceButton
          {...e}
          key={e.id}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          toggleEvidence={props.setEvidence}
        />
      ))}
    </div>
  );
};

export default EvidenceWrapper;
