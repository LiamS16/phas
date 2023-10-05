import type { evidence } from "~/server/api/data/evidence";

export interface IMenuEvidence {
  id: evidence;
  name: string;
  selected: boolean;
  possible: boolean;
}
