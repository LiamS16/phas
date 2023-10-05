import type { IEvidence, IGhost } from "~/server/api/data/types";
import type { IMenuEvidence } from "../types/types";

// 1 - Possible ghosts
// 2 - Set Ghost
// 3 - Evidence array
// 4 - Set Evidence

export const useGhost = (
  allEvidence: IEvidence[],
  allGhosts: IGhost[],
): [IMenuEvidence[], undefined] => {
  return [[], undefined];
};
