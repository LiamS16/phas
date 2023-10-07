import type { IEvidence, evidence } from "~/server/api/data/types";
import type { IMenuEvidence } from "../../ghosts/types/types";
import { useEffect, useState } from "react";
import { EVIDENCEVALUE } from "~/modules/ghosts/types/evidenceValue";

export const useEvidence = (
  allEvidence: IEvidence[],
): [
  IMenuEvidence[],
  (id: evidence, value: IMenuEvidence["value"]) => void,
  boolean,
] => {
  const [possibleEvidence, setPossibleEvidence] = useState<IMenuEvidence[]>([]);
  const [reRender, triggerReRender] = useState<boolean>(false);

  useEffect(() => {
    setPossibleEvidence(
      allEvidence.map((e) => ({ ...e, value: EVIDENCEVALUE.POSSIBLE })),
    );
  }, [allEvidence]);

  const toggleEvidence = (id: evidence, value: IMenuEvidence["value"]) => {
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

  return [possibleEvidence, toggleEvidence, reRender];
};
