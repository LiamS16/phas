import { AccordionItem } from "@radix-ui/react-accordion";
import React from "react";
import EvidenceWrapper from "~/modules/evidence/components/EvidenceWrapper";
import type {
  GhostSpeed,
  IGhostSpeed,
  IMenuEvidence,
  ISanity,
  SanityKey,
  SecondaryEvidenceValue,
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
import SanityWrapper from "./SanityWrapper";
import Info from "~/modules/misc/components/Info";
import CursedPossessionsWrapper from "~/modules/guide/components/CursedPossessionsWrapper";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed, value: SecondaryEvidenceValue): void;
  sanity: ISanity;
  setSanity(sanity: SanityKey, value: SecondaryEvidenceValue): void;
  handleReset(): void;
  numOfEvidence: number;
  setNumOfEvidence(val: number): void;
}

const LeftColumn = (props: IProps): JSX.Element => {
  return (
    <Card className="flex h-full flex-col rounded-none border-y-0 border-l-0 bg-slate-900 px-1">
      <Accordion
        type="single"
        collapsible
        className="mt-1 h-[calc(100%-6.25rem)] w-full overflow-y-auto rounded border"
        defaultValue="evidence"
      >
        <AccordionItem value="evidence">
          <AccordionTrigger className="w-48 px-3">Evidence</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <EvidenceWrapper
              evidence={props.evidence}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              setEvidence={props.setEvidence}
              numOfEvidence={props.numOfEvidence}
              // eslint-disable-next-line @typescript-eslint/unbound-method
              setNumOfEvidence={props.setNumOfEvidence}
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
          <AccordionContent className="rounded bg-slate-950 p-2">
            {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
            <SanityWrapper sanity={props.sanity} setSanity={props.setSanity} />
          </AccordionContent>
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
          <AccordionContent className="rounded bg-slate-950 p-2">
            <CursedPossessionsWrapper />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="maps">
          <AccordionTrigger className="w-48 px-3">Maps</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2"></AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="grow" />
      <button
        className="mx-3 rounded bg-white px-3 py-1 text-slate-900"
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onClick={props.handleReset}
      >
        Reset
      </button>
      <p className="my-1 text-center text-xs text-blue-400">Version 0.1.2</p>
      <Info />
    </Card>
  );
};

export default LeftColumn;
