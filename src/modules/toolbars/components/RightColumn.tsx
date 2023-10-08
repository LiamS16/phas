import { AccordionItem } from "@radix-ui/react-accordion";
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
    <Card className="h-full rounded-none border-y-0 border-l-0 bg-slate-900">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="evidence">
          <AccordionTrigger className="w-48 px-4">Timers</AccordionTrigger>
          <AccordionContent className="rounded bg-slate-950 p-2">
            <TimerWrapper />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default RightColumn;
