import { useEffect, useState } from "react";
import type { IGhost, evidence } from "~/server/api/data/types";
import type { IMenuEvidence } from "../types/types";
import { EVIDENCEVALUE } from "../types/evidenceValue";

const useGhosts = (
  ghosts: IGhost[],
  evidence: IMenuEvidence[],
  reRender: boolean,
): [IGhost[]] => {
  const [possibleGhosts, setPossibleGhosts] = useState<IGhost[]>([]);

  useEffect(() => {
    // Include passed as true is for confirmed evidence, passed as false is for ruled out evidence
    const isGhostValid = (
      g: IGhost,
      e: evidence,
      include: boolean,
    ): boolean => {
      if (g.evidence.map((ev) => ev.evidence.id).includes(e)) return include;
      else return !include;
    };

    const filterGhosts = () => {
      const confirmedEvidence = evidence
        .filter((e) => e.value === EVIDENCEVALUE.SELECTED)
        .map((e) => e.id);

      const ruledOutEvidence = evidence
        .filter((e) => e.value === EVIDENCEVALUE.RULED_OUT)
        .map((e) => e.id);

      let newGhosts = ghosts;
      if (confirmedEvidence.length > 0) {
        for (const e of confirmedEvidence) {
          newGhosts = newGhosts.filter((g) => isGhostValid(g, e, true));
        }
      }

      for (const e of ruledOutEvidence) {
        newGhosts = newGhosts.filter((g) => isGhostValid(g, e, false));
      }

      setPossibleGhosts(newGhosts);
    };

    filterGhosts();
  }, [evidence, ghosts, reRender]);

  return [possibleGhosts];
};

export default useGhosts;
