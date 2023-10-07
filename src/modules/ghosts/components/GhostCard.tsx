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
              className="h-4 w-4"
              style={{
                stroke: ghost.ruledOut ? "rgb(71, 85, 105)" : "",
              }}
            />
          ))}
        </div>
        <div
          className={`flex gap-2 whitespace-nowrap text-center text-sm ${
            ghost.ruledOut ? "text-slate-600" : ""
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
          <DialogContent></DialogContent>
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
