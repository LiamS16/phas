import type { IGhost } from "~/server/api/data/types";
import type { IGhostSpeedKey } from "../types/types";

export const ghostSpeedFilter = (g: IGhost, s: IGhostSpeedKey): boolean => {
  let isPossible = false;

  for (const speed of g.huntSpeed) {
    if (speed > s.speedRange[0] && speed < s.speedRange[1]) isPossible = true;
  }

  return isPossible;
};
