import React from "react";
import GhostWrapper from "~/modules/ghosts/components/GhostWrapper";
import { Card } from "~/modules/shad/components/ui/card";
import { api } from "~/utils/api";
import { queryOptions } from "../constants/query";
import EvidenceWrapper from "~/modules/evidence/components/EvidenceWrapper";
import { useEvidence } from "~/modules/evidence/hooks/useEvidence";
import useGhosts from "~/modules/ghosts/hooks/useGhosts";

const AppWrapper = (): JSX.Element => {
  const allGhosts = api.ghost.getAllGhosts.useQuery(undefined, queryOptions);
  const allEvidence = api.ghost.getAllEvidence.useQuery(
    undefined,
    queryOptions,
  );

  const [evidence, setEvidence, reRender] = useEvidence(allEvidence.data ?? []);
  const [ghosts] = useGhosts(allGhosts.data ?? [], evidence, reRender);

  return (
    <main className="flex h-screen w-screen bg-background">
      <EvidenceWrapper evidence={evidence} setEvidence={setEvidence} />
      <GhostWrapper ghosts={ghosts} />
      <Card className="h-full w-1/4 rounded-none border-y-0 border-r-0 bg-slate-900"></Card>
    </main>
  );
};

export default AppWrapper;
