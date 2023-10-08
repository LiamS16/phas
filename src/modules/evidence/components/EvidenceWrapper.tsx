import React from "react";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import EvidenceButton from "./EvidenceButton";
import type { evidence } from "~/server/api/data/types";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
}

const EvidenceWrapper = (props: IProps): JSX.Element => {
  return (
    <div className="-mb-4 flex flex-col gap-2 py-2">
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
