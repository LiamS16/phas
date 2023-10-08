import { AccordionItem } from "@radix-ui/react-accordion";
import { Maximize } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "~/modules/shad/components/ui/accordion";
import { Card } from "~/modules/shad/components/ui/card";
import TimerWrapper from "~/modules/timers/components/TimerWrapper";

const RightColumn = (): JSX.Element => {
  return (
    <Card className="flex h-full flex-col rounded-none border-y-0 border-l-0 bg-slate-900 px-1">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="evidence">
          <AccordionTrigger className="w-48 px-4">Timers</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <TimerWrapper />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="hunts">
          <AccordionTrigger className="w-48 px-4">
            Cursed Possessions
          </AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <TimerWrapper />
          </AccordionContent>
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

export default RightColumn;
