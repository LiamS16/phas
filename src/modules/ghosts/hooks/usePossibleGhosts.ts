import type { IGhost } from "~/server/api/data/types";
import type { IMenuEvidence } from "../../ghosts/types/types";
import { useEffect, useState } from "react";

export const usePossibleGhosts = (
  evidence: IMenuEvidence[],
  ghosts: IGhost[],
): [IGhost[], IMenuEvidence[]] => {
  const [posGhosts, setPosGhosts] = useState<IGhost[]>(ghosts);
  const [, triggerReRender] = useState<boolean>(false);
  const ev = evidence.map((e) => e.id);

  useEffect(() => {
    const posEv = evidence
      .filter((e) => ["selected", "possible"].includes(e.value))
      .map((e) => e.id);
    const posGh: IGhost[] = [];

    for (const ghost of ghosts) {
      for (const e of ghost.evidence) {
        if (posEv.includes(e.evidence.id)) {
          posGh.push(ghost);
          break;
        }
      }
    }

    setPosGhosts(posGh);
    triggerReRender((prev) => !prev);
  }, [evidence, ghosts]);

  return [posGhosts, []];
};
