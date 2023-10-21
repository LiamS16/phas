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
  numOfEvidence: number;
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
    numOfEvidence,
  } = args;

  const [possibleGhosts, setPossibleGhosts] = useState<IClientGhost[]>([]);
  const [, triggerReRender] = useState<boolean>(false);
  const [allGhosts, setAllGhosts] = useState<IClientGhost[]>([]);

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
    const newGhosts = ghosts.map((g) => ({ ...g, ruledOut: false }));
    setPossibleGhosts(newGhosts);
    setAllGhosts(newGhosts);
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

    const confirmedEvidence = evidence
      .filter((e) => e.value === EVIDENCEVALUE.SELECTED)
      .map((e) => e.id);

    const ruledOutEvidence = evidence
      .filter((e) => e.value === EVIDENCEVALUE.RULED_OUT)
      .map((e) => e.id);

    let newGhosts: IClientGhost[] = [];
    if (allGhosts.length === 0) {
      const gh = ghosts.map((g) => ({ ...g, ruledOut: false }));
      newGhosts = gh;
      setAllGhosts(gh);
    } else newGhosts = allGhosts;

    // Check if any evidence has been selected, rule out ghosts that do not have that evidence
    if (confirmedEvidence.length > 0) {
      // Rule out ghots that do not have selected evidence
      for (const e of confirmedEvidence) {
        newGhosts = newGhosts.filter((g) => isGhostValid(g, e, true));
      }
    }

    // Rule out ghosts that have evidence that has been ruled out
    for (const e of ruledOutEvidence) {
      if (numOfEvidence === 3)
        newGhosts = newGhosts.filter((g) => isGhostValid(g, e, false));
      else {
        newGhosts = newGhosts.filter((g) => {
          let include = true;
          for (const ev of g.evidence) {
            if (ev.forced && ev.evidence.id === e) include = false;
          }
          return include;
        });
      }
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
    const posEvidence: evidence[] = [];

    if (numOfEvidence > 0) {
      for (const g of newGhosts) {
        for (const e of g.evidence) {
          if (!posEvidence.includes(e.evidence.id))
            posEvidence.push(e.evidence.id);
        }
      }
    } else {
      posEvidence.push("orbs");
      for (const e of evidence) {
        if (e.id === "orbs" && e.value === EVIDENCEVALUE.SELECTED)
          newGhosts = [allGhosts.find((g) => g.name === "The Mimic")!];
      }
    }

    const newEvidence = evidence;
    for (const e of newEvidence) {
      if (!posEvidence.includes(e.id) && e.value !== EVIDENCEVALUE.RULED_OUT)
        setEvidence(e.id, EVIDENCEVALUE.IMPOSSIBLE);
      else if (e.value === EVIDENCEVALUE.IMPOSSIBLE)
        setEvidence(e.id, EVIDENCEVALUE.POSSIBLE);
    }
    if (process.env.NODE_ENV === "development") {
      console.log("loop check");
    }

    setPossibleGhosts(newGhosts);
    triggerReRender((prev) => !prev);
  }, [
    allGhosts,
    evidence,
    ghosts,
    sanity,
    speed,
    speedReRender,
    sanityReRender,
    ghostReRender,
    numOfEvidence,
  ]);

  return [possibleGhosts, ruleOutGhost, resetGhosts];
};

export default useGhosts;
