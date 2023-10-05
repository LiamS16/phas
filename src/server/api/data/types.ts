export interface IEvidence {
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

export interface IGhost {
  name: string;
  evidence: IGhostEvidence[];
  huntSpeed?: number | [number, number];
  huntSanity?: number | [number, number];
  description?: string;
  behaviourThatExcludes?: IBehaviour[];
  behaviourThatIncludes?: IBehaviour[];
  behaviourThatReveals?: IBehaviour;
  huntTraits?: IBehaviour[];
}
