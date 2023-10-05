import type { IEvidence } from "~/server/api/data/types";
import type { IMenuEvidence } from "../types/types";
import type { evidence } from "~/server/api/data/evidence";
import { useEffect, useState } from "react";

export const useEvidence = (
  allEvidence: IEvidence[],
): [IMenuEvidence[], (evidence: evidence) => void] => {
  const [possibleEvidence, setPossibleEvidence] = useState<IMenuEvidence[]>([]);

  useEffect(() => {
    setPossibleEvidence(
      allEvidence.map((e) => ({ ...e, possible: true, selected: false })),
    );
  }, [allEvidence]);

  const toggleEvidence = (id: evidence) => {
    setPossibleEvidence((prev) => {
      for (const e of prev) {
        if (e.id === id) {
          e.selected = !e.selected;
          break;
        }
      }

      return prev;
    });
  };

  return [possibleEvidence, toggleEvidence];
};
