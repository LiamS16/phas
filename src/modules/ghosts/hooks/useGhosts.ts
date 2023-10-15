import { useEffect, useState } from "react";
import type { IGhost, evidence } from "~/server/api/data/types";
import {
  SecondaryEvidenceValue,
  type IClientGhost,
  type IGhostSpeed,
  type IMenuEvidence,
  type ISanity,
} from "../types/types";
import { EVIDENCEVALUE } from "../types/evidenceValue";
import { ghostSpeedFilter } from "../../evidence/utils/speedUtils";

const useGhosts = (args: {
  ghosts: IGhost[];
  evidence: IMenuEvidence[];
  ghostReRender: boolean;
  speedReRender: boolean;
  sanityReRender: boolean;
  speed: IGhostSpeed;
  sanity: ISanity;
  setEvidence: (id: evidence, value: IMenuEvidence["value"]) => void;
}): [
  IClientGhost[],
  (ghostName: string, ruleOut: boolean) => void,
  () => void,
] => {
  const {
    evidence,
    ghostReRender,
    ghosts,
    sanityReRender,
    speed,
    speedReRender,
    sanity,
    setEvidence,
  } = args;

  const [possibleGhosts, setPossibleGhosts] = useState<IClientGhost[]>([]);
  const [, triggerReRender] = useState<boolean>(false);

  const ruleOutGhost = function (ghostName: string, ruleOut: boolean) {
    setPossibleGhosts((prevGhosts) => {
      for (const g of prevGhosts) {
        if (g.name === ghostName) {
          g.ruledOut = ruleOut;
          break;
        }
      }
      return prevGhosts;
    });

    triggerReRender((prev) => !prev);
  };

  const resetGhosts = () => {
    setPossibleGhosts(ghosts.map((g) => ({ ...g, ruledOut: false })));
    triggerReRender((prev) => !prev);
  };

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

      // Check if any evidence has been selected, rule out ghosts that do not have that evidence
      let newGhosts: IClientGhost[] = ghosts.map((g) => ({
        ...g,
        ruledOut: false,
      }));
      if (confirmedEvidence.length > 0) {
        // Rule out ghots that do not have selected evidence
        for (const e of confirmedEvidence) {
          newGhosts = newGhosts.filter((g) => isGhostValid(g, e, true));
        }
      }

      // Rule out ghosts that have evidence that has been ruled out
      for (const e of ruledOutEvidence) {
        newGhosts = newGhosts.filter((g) => isGhostValid(g, e, false));
      }

      // Rule out ghosts based on speed (BUGGED)
      for (const s of Object.values(speed)) {
        if (!s.selected) continue;

        newGhosts = newGhosts.filter((g) => ghostSpeedFilter(g, s));
      }

      // Rule out ghosts based on hunt sanity
      for (const s of Object.values(sanity)) {
        if (s.selected === SecondaryEvidenceValue.SELECTED)
          newGhosts = newGhosts.filter(
            (g) => (g.maxHuntSanity ?? g.huntSanity) > s.minValue,
          );
      }

      // Rule out evidence that is not possible
      if (process.env.NODE_ENV === "development") {
        const posEvidence: evidence[] = [];

        for (const g of newGhosts) {
          for (const e of g.evidence) {
            if (!posEvidence.includes(e.evidence.id))
              posEvidence.push(e.evidence.id);
          }
        }

        const newEvidence = evidence;
        for (const e of newEvidence) {
          if (!posEvidence.includes(e.id))
            setEvidence(e.id, EVIDENCEVALUE.IMPOSSIBLE);
          else
            setEvidence(
              e.id,
              e.value === EVIDENCEVALUE.IMPOSSIBLE
                ? EVIDENCEVALUE.POSSIBLE
                : e.value,
            );
        }
      }
      setPossibleGhosts(newGhosts);
      triggerReRender((prev) => !prev);
    };

    filterGhosts();
  }, [
    evidence,
    ghosts,
    ghostReRender,
    speedReRender,
    speed,
    sanityReRender,
    sanity,
    setEvidence,
  ]);

  return [possibleGhosts, ruleOutGhost, resetGhosts];
};

export default useGhosts;
