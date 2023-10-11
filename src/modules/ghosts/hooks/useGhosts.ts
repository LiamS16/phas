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
import { ghostSpeedFilter } from "../utils/speedUtils";

const useGhosts = (args: {
  ghosts: IGhost[];
  evidence: IMenuEvidence[];
  ghostReRender: boolean;
  speedReRender: boolean;
  sanityReRender: boolean;
  speed: IGhostSpeed;
  sanity: ISanity;
}): [IClientGhost[], (ghostName: string, ruleOut: boolean) => void] => {
  const {
    evidence,
    ghostReRender,
    ghosts,
    sanityReRender,
    speed,
    speedReRender,
    sanity,
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

      let newGhosts: IClientGhost[] = ghosts.map((g) => ({
        ...g,
        ruledOut: false,
      }));
      if (confirmedEvidence.length > 0) {
        for (const e of confirmedEvidence) {
          newGhosts = newGhosts.filter((g) => isGhostValid(g, e, true));
        }
      }

      for (const e of ruledOutEvidence) {
        newGhosts = newGhosts.filter((g) => isGhostValid(g, e, false));
      }

      for (const s of Object.values(speed)) {
        if (!s.selected) continue;

        newGhosts = newGhosts.filter((g) => ghostSpeedFilter(g, s));
      }

      for (const s of Object.values(sanity)) {
        if (s.selected === SecondaryEvidenceValue.SELECTED)
          newGhosts = newGhosts.filter((g) => g.huntSanity > s.minValue);
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
  ]);

  return [possibleGhosts, ruleOutGhost];
};

export default useGhosts;
