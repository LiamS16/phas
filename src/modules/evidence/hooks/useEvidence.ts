import type { IEvidence, evidence } from "~/server/api/data/types";
import type { IMenuEvidence } from "../../ghosts/types/types";
import { useEffect, useState } from "react";
import { EVIDENCEVALUE } from "~/modules/ghosts/types/evidenceValue";

export const useEvidence = (
  allEvidence: IEvidence[],
): {
  evidence: IMenuEvidence[];
  setEvidence: (id: evidence, value: IMenuEvidence["value"]) => void;
  evidenceReRender: boolean;
  resetEvidence(): void;
  numOfEvidence: number;
  setNumOfEvidence(val: number): void;
} => {
  const [possibleEvidence, setPossibleEvidence] = useState<IMenuEvidence[]>([]);
  const [reRender, triggerReRender] = useState<boolean>(false);
  const [numOfEvidence, setNumOfEvidence] = useState<number>(3);

  useEffect(() => {
    setPossibleEvidence(
      allEvidence
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((e) => ({ ...e, value: EVIDENCEVALUE.POSSIBLE })),
    );
  }, [allEvidence]);

  useEffect(() => {
    if (numOfEvidence === 0) {
      const filter = (prev: IMenuEvidence[]) => {
        for (const e of prev) {
          if (e.id !== "orbs") e.value = EVIDENCEVALUE.IMPOSSIBLE;
        }

        return prev;
      };

      setPossibleEvidence((prev) => filter(prev));
      triggerReRender((p) => !p);
    } else {
      const filter = (prev: IMenuEvidence[]) => {
        for (const e of prev) {
          if (e.value === EVIDENCEVALUE.IMPOSSIBLE)
            e.value = EVIDENCEVALUE.POSSIBLE;
        }

        return prev;
      };

      setPossibleEvidence((p) => filter(p));
      triggerReRender((p) => !p);
    }
  }, [numOfEvidence]);

  const toggleEvidence = function (
    id: evidence,
    value: IMenuEvidence["value"],
  ) {
    setPossibleEvidence((prev) => {
      const newEv = prev;

      newEv.forEach((e) => {
        if (e.id === id) {
          e.value = value;
        }
      });

      return newEv;
    });
    triggerReRender((prev) => !prev);
  };

  const resetEvidence = () => {
    setPossibleEvidence((prev) =>
      prev.map((e) => ({ ...e, value: EVIDENCEVALUE.POSSIBLE })),
    );
  };

  return {
    evidence: possibleEvidence,
    setEvidence: toggleEvidence,
    evidenceReRender: reRender,
    resetEvidence,
    setNumOfEvidence,
    numOfEvidence,
  };
};
