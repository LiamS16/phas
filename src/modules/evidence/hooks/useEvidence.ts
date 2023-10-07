import type { IEvidence } from "~/server/api/data/types";
import type { IMenuEvidence } from "../../ghosts/types/types";
import type { evidence } from "~/server/api/data/evidence";
import { useEffect, useState } from "react";

export const useEvidence = (
  allEvidence: IEvidence[],
): [IMenuEvidence[], (evidence: evidence) => void, boolean] => {
  const [possibleEvidence, setPossibleEvidence] = useState<IMenuEvidence[]>([]);
  const [reRender, triggerReRender] = useState<boolean>(false);

  useEffect(() => {
    setPossibleEvidence(allEvidence.map((e) => ({ ...e, value: "possible" })));
  }, [allEvidence]);

  const toggleEvidence = (id: evidence) => {
    setPossibleEvidence((prev) => {
      const newEv = prev;

      newEv.forEach((e) => {
        if (e.id === id) {
          switch (e.value) {
            case "possible":
              e.value = "selected";
              break;
            case "ruled out":
              e.value = "possible";
              break;
            case "selected":
              e.value = "ruled out";
              break;
          }
        }
      });

      return newEv;
    });
    triggerReRender((prev) => !prev);
  };

  return [possibleEvidence, toggleEvidence, reRender];
};
