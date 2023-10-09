export interface IEvidence {
  id: evidence;
  name: string;
}

export interface IBehaviour {
  name: string;
  duringHunt?: boolean;
}

interface IGhostEvidence {
  evidence: IEvidence;
  forced?: boolean;
  hidden?: boolean;
}

export type evidence =
  | "dots"
  | "emf"
  | "freezing"
  | "writing"
  | "spirit"
  | "uv"
  | "orbs";

export interface IGhost {
  name: string;
  evidence: IGhostEvidence[];
  huntSpeed: [number] | [number, number];
  huntSanity: number;
  description?: string;
  behaviourThatExcludes?: IBehaviour[];
  behaviourThatIncludes?: IBehaviour[];
  behaviourThatReveals?: IBehaviour;
  huntTraits?: IBehaviour[];
}

export enum size {
  SMALL,
  MEDIUM,
  LARGE,
}
export interface IMap {
  name: string;
  size: size;
  url: string;
}
