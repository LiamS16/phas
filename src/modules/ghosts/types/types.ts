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
  selected: SecondaryEvidenceValue;
  id: GhostSpeed;
  speedRange: [number, number];
}

export type IGhostSpeed = Record<GhostSpeed, IGhostSpeedKey>;

export enum SecondaryEvidenceValue {
  POSSIBLE,
  SELECTED,
  IMPOSSIBLE,
}

export type SanityKey = "late" | "normal" | "early" | "veryEarly";
export interface IGhostSanity {
  name: string;
  selected: SecondaryEvidenceValue;
  minValue: number;
  id: SanityKey;
}
export type ISanity = Record<SanityKey, IGhostSanity>;
