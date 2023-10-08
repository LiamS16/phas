import { AccordionItem } from "@radix-ui/react-accordion";
import React from "react";
import EvidenceWrapper from "~/modules/evidence/components/EvidenceWrapper";
import SpeedWrapper from "~/modules/evidence/components/SpeedWrapper";
import type { IMenuEvidence } from "~/modules/ghosts/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/modules/shad/components/ui/accordion";
import { Button } from "~/modules/shad/components/ui/button";
import { Card } from "~/modules/shad/components/ui/card";
import type { evidence } from "~/server/api/data/types";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
}

const LeftColumn = (props: IProps): JSX.Element => {
  return (
    <Card className="flex h-full flex-col justify-between rounded-none border-y-0 border-l-0 bg-slate-900 px-1">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="evidence">
          <AccordionTrigger className="w-48 px-3">Evidence</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <EvidenceWrapper
              evidence={props.evidence}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              setEvidence={props.setEvidence}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="speed" className="w-48 px-3">
          <AccordionTrigger>Speed</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <SpeedWrapper />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sanity" className="w-48 px-3">
          <AccordionTrigger>Hunt Sanity</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="tells" className="w-48 px-3">
          <AccordionTrigger>Tells</AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <div className="flex w-full items-center justify-center p-3">
        <button className="rounded border border-white px-5 py-1">Reset</button>
      </div>
    </Card>
  );
};

export default LeftColumn;
