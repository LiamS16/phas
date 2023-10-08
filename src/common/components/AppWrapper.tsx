import React from "react";
import GhostWrapper from "~/modules/ghosts/components/GhostWrapper";
import { api } from "~/utils/api";
import { queryOptions } from "../constants/query";
import { useEvidence } from "~/modules/evidence/hooks/useEvidence";
import useGhosts from "~/modules/ghosts/hooks/useGhosts";
import LeftColumn from "../../modules/toolbars/components/LeftColumn";
import RightColumn from "../../modules/toolbars/components/RightColumn";
import { useSpeed } from "~/modules/evidence/hooks/useSpeed";

const AppWrapper = (): JSX.Element => {
  const initData = api.ghost.getInitData.useQuery(undefined, queryOptions);

  const [evidence, setEvidence, reRender] = useEvidence(
    initData.data?.evidence ?? [],
  );
  const [ghostSpeed, setGhostSpeed] = useSpeed();
  const [ghosts, ruleOutGhost] = useGhosts(
    initData.data?.ghosts ?? [],
    evidence,
    reRender,
    ghostSpeed,
  );

  return (
    <main className="flex h-screen w-screen bg-black">
      <LeftColumn
        evidence={evidence}
        speed={ghostSpeed}
        setEvidence={setEvidence}
        toggleGhostSpeed={setGhostSpeed}
      />
      <GhostWrapper ghosts={ghosts} ruleOutGhost={ruleOutGhost} />
      <RightColumn />
    </main>
  );
};

export default AppWrapper;
