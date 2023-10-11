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
} => {
  const [possibleEvidence, setPossibleEvidence] = useState<IMenuEvidence[]>([]);
  const [reRender, triggerReRender] = useState<boolean>(false);

  useEffect(() => {
    setPossibleEvidence(
      allEvidence
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((e) => ({ ...e, value: EVIDENCEVALUE.POSSIBLE })),
    );
  }, [allEvidence]);

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

      return newEv.sort((a, b) => (a.name > b.name ? 1 : -1));
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
  };
};
