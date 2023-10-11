import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "~/modules/shad/components/ui/card";
import EvidenceIcon from "../../evidence/components/EvidenceIcon";
import { Info, XCircle } from "lucide-react";
import type { IClientGhost } from "../types/types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/modules/shad/components/ui/dialog";

interface IProps {
  ghost: IClientGhost;
  ruleOutGhost(ghostName: string, ruleOut: boolean): void;
}

const GhostCard = (props: IProps): JSX.Element | null => {
  const { ghost } = props;

  const handleRuleOut = () => {
    props.ruleOutGhost(ghost.name, !ghost.ruledOut);
  };

  return (
    <Card
      className={`flex w-36 flex-col items-center gap-2 ${
        ghost.ruledOut ? "bg-slate-950" : "bg-slate-900"
      }`}
    >
      <CardTitle className={`pt-4 ${ghost.ruledOut ? "text-slate-600" : ""}`}>
        {ghost.name}
      </CardTitle>
      <CardContent className="flex w-full flex-col items-center gap-2">
        <div className="w-full border-b" />
        <div className="flex w-min justify-between gap-2">
          {ghost.evidence.map((e) => (
            <EvidenceIcon
              id={e.evidence.id}
              key={e.evidence.id}
              className="h-3 w-3"
              style={{
                stroke: ghost.ruledOut
                  ? "rgb(71, 85, 105)"
                  : "rgb(148, 163, 184)",
              }}
            />
          ))}
        </div>
        <div
          className={`flex gap-2 whitespace-nowrap text-center text-sm ${
            ghost.ruledOut ? "text-slate-600" : "text-slate-400"
          }`}
        >
          <p>{ghost.huntSanity?.toString().replace(",", " - ")}%</p>
          <p>{ghost.huntSpeed?.toString().replace(",", " - ")} m/s</p>
        </div>
      </CardContent>
      <div className="-mt-5 flex w-full">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex w-1/2 items-center justify-center rounded-bl border border-blue-900 bg-blue-900 bg-opacity-10 p-1 shadow shadow-blue-900 transition-opacity hover:bg-opacity-20">
              <Info className="h-4 w-4 text-blue-600" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex justify-between">
              <h1 className="text-lg">{ghost.name}</h1>
              <div className="mr-4 flex gap-1">
                {ghost.evidence.map((e) => (
                  <EvidenceIcon
                    id={e.evidence.id}
                    key={e.evidence.id}
                    className="h-5 w-5"
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <h2>Hunt Sanity:</h2>
                <p className="text-sm">{ghost.huntSanity}</p>
              </div>
              <div className="flex flex-col">
                <h2>Hunt Speed:</h2>
                <p className="text-sm">
                  {ghost.huntSpeed.toString().replace(",", " - ")}
                </p>
              </div>
            </div>
            <h2>Tells:</h2>
            <p className="-mt-4 text-sm">{ghost.tells}</p>
            {ghost.huntsAt && (
              <>
                <h2>Hunts At:</h2>
                <p className="-mt-4 text-sm">{ghost.huntsAt}</p>
              </>
            )}
            <h2>Description</h2>
            <p className="-mt-4 text-sm">{ghost.description}</p>
          </DialogContent>
        </Dialog>
        <button
          className="flex w-1/2 items-center justify-center rounded-br border border-red-900 bg-red-900 bg-opacity-10 p-1 shadow shadow-red-900"
          onClick={handleRuleOut}
        >
          <XCircle className="h-4 w-4 text-red-600" />
        </button>
      </div>
    </Card>
  );
};

export default GhostCard;
