import type { IGhost, evidence } from "~/server/api/data/types";
import type { EVIDENCEVALUE } from "./evidenceValue";

export interface IMenuEvidence {
  id: evidence;
  name: string;
  value: EVIDENCEVALUE;
}

export interface IClientGhost extends IGhost {
  ruledOut: boolean;
}

export type GhostSpeed = "fast" | "normal" | "slow";

export interface IGhostSpeedKey {
  name: string;
  selected: boolean;
  id: GhostSpeed;
  speedRange: [number, number];
}

export type IGhostSpeed = Record<GhostSpeed, IGhostSpeedKey>;
