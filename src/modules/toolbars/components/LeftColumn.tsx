import { AccordionItem } from "@radix-ui/react-accordion";
import { Maximize } from "lucide-react";
import React from "react";
import EvidenceWrapper from "~/modules/evidence/components/EvidenceWrapper";
import type {
  GhostSpeed,
  IGhostSpeed,
  IMenuEvidence,
} from "~/modules/ghosts/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/modules/shad/components/ui/accordion";
import { Card } from "~/modules/shad/components/ui/card";
import TimerWrapper from "~/modules/timers/components/TimerWrapper";
import SpeedWrapper from "~/modules/toolbars/components/SpeedWrapper";
import type { evidence } from "~/server/api/data/types";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed, value: boolean): void;
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
        <AccordionItem value="speed">
          <AccordionTrigger className="w-48 px-3">Speed</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <SpeedWrapper
              speed={props.speed}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              toggleGhostSpeed={props.toggleGhostSpeed}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sanity">
          <AccordionTrigger className="w-48 px-3">Hunt Sanity</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="timers">
          <AccordionTrigger className="w-48 px-3">Timers</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <TimerWrapper />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hunts">
          <AccordionTrigger className="w-48 px-3">
            Cursed Possessions
          </AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2"></AccordionContent>
        </AccordionItem>
      </Accordion>
      <button className="m-3 flex items-center justify-center gap-2 rounded border border-white px-5 py-1">
        Map <Maximize className="h-4 w-4" />
      </button>
      <div className="grow" />
      <div className="flex w-full items-center justify-center gap-2 p-3">
        {/* <Dialog defaultOpen>
          <DialogTrigger asChild>
            <button className="rounded border border-white px-3 py-1">
              Initialize
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Initialize</DialogHeader>
          </DialogContent>
        </Dialog> */}
        <button className="rounded bg-white px-3 py-1 text-slate-900">
          Reset
        </button>
      </div>
    </Card>
  );
};

export default LeftColumn;
