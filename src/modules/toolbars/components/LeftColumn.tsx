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
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/modules/shad/components/ui/dialog";
import Link from "next/link";

interface IProps {
  evidence: IMenuEvidence[];
  setEvidence(id: evidence, value: IMenuEvidence["value"]): void;
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed, value: SecondaryEvidenceValue): void;
  sanity: ISanity;
  setSanity(sanity: SanityKey, value: SecondaryEvidenceValue): void;
  handleReset(): void;
}

const LeftColumn = (props: IProps): JSX.Element => {
  return (
    <Card className="flex h-full flex-col rounded-none border-y-0 border-l-0 bg-slate-900 px-1">
      <Accordion
        type="single"
        collapsible
        className="mt-1 h-[calc(100%-5.5rem)] w-full rounded border"
        defaultValue="evidence"
      >
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
          <AccordionContent className="rounded bg-slate-950 p-2"></AccordionContent>
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
      <p className="my-1 text-center text-xs text-blue-400">Version 0.1.0</p>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mx-auto mb-3 flex items-center justify-center gap-2 text-sm hover:text-slate-400">
            <Info className="h-4 w-4" />
            Info
          </button>
        </DialogTrigger>
        <DialogContent className="h-5/6 overflow-y-scroll">
          <h1>Copyright</h1>
          <div className="-mt-2 flex flex-col gap-2 rounded border bg-black p-4 font-mono text-xs">
            <p>
              This website, located at https://phas-guide.vercel.app/ (referred
              to as the {"Website"}), is a fan-made guide for the popular game
              Phasmophobia. The information and content provided on this Website
              are intended for informational and educational purposes only.
            </p>
            <h2>Not an Official Source:</h2>
            <p>
              This Website is not affiliated with, endorsed by, or officially
              associated with the creators or developers of Phasmophobia or
              Kinetic Games. It is an independent project created by Liam Shaw,
              a fan of the game.
            </p>
            <h2>Data Sources:</h2>
            <p>
              All data and information presented on this Website have been
              sourced from publicly available content. The primary sources for
              information are the content creator{" "}
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UC5uNya42ayhsRnZOR3mO6NA"
                className="underline hover:cursor-pointer"
              >
                INSYM
              </Link>
              , and the official{" "}
              <Link
                target="_blank"
                href="https://discord.gg/phasmophobia"
                className="underline hover:cursor-pointer"
              >
                Phasmophobia Discord server
              </Link>
              .
            </p>
            <h2>Accuracy and Reliability:</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we
              cannot guarantee the accuracy, completeness, or reliability of the
              content presented on this Website. Users should verify information
              independently if accuracy is critical.
            </p>
            <h2>Contact Information:</h2>
            <p>
              For inquiries or concerns regarding this Website, you can reach
              out to us through our{" "}
              <Link
                target="_blank"
                href="https://discord.gg/utKyzy7umT"
                className="underline hover:cursor-pointer"
              >
                Discord server
              </Link>
              .
            </p>
            <h2>User Responsibility:</h2>
            <p>
              Users of this Website are responsible for their actions and
              decisions made based on the information provided. We are not
              liable for any consequences resulting from the use of information
              found on this Website.
            </p>
            <h2>Changes and Updates:</h2>
            <p>
              We may modify, update, or remove content from this Website without
              notice. It is the {"user's"} responsibility to stay informed about
              any changes. By using this Website, you agree to and accept the
              terms and conditions outlined in this disclaimer. If you do not
              agree with any part of this disclaimer, please refrain from using
              this Website.
            </p>
            <h3>Last updated: 11 October 2023</h3>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default LeftColumn;
