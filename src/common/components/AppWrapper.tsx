import React from "react";
import GhostWrapper from "~/modules/ghosts/components/GhostWrapper";
import { api } from "~/utils/api";
import { queryOptions } from "../constants/query";
import { useEvidence } from "~/modules/evidence/hooks/useEvidence";
import useGhosts from "~/modules/ghosts/hooks/useGhosts";
import LeftColumn from "../../modules/toolbars/components/LeftColumn";
import RightColumn from "../../modules/toolbars/components/RightColumn";

const AppWrapper = (): JSX.Element => {
  const allGhosts = api.ghost.getAllGhosts.useQuery(undefined, queryOptions);
  const allEvidence = api.ghost.getAllEvidence.useQuery(
    undefined,
    queryOptions,
  );

  const [evidence, setEvidence, reRender] = useEvidence(allEvidence.data ?? []);
  const [ghosts, ruleOutGhost] = useGhosts(
    allGhosts.data ?? [],
    evidence,
    reRender,
  );

  return (
    <main className="flex h-screen w-screen bg-black">
      <LeftColumn evidence={evidence} setEvidence={setEvidence} />
      <GhostWrapper ghosts={ghosts} ruleOutGhost={ruleOutGhost} />
      <RightColumn />
    </main>
  );
};

export default AppWrapper;
