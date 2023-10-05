import React from "react";
import GhostWrapper from "~/modules/ghosts/components/GhostWrapper";
import { Card } from "~/modules/shad/components/ui/card";
import { api } from "~/utils/api";
import { queryOptions } from "../constants/query";
import EvidenceWrapper from "~/modules/evidence/components/EvidenceWrapper";
import { useEvidence } from "~/modules/evidence/hooks/useEvidence";
import { usePossibleGhosts } from "~/modules/ghosts/hooks/usePossibleGhosts";

const AppWrapper = (): JSX.Element => {
  const allGhosts = api.ghost.getAllGhosts.useQuery(undefined, queryOptions);
  const allEvidence = api.ghost.getAllEvidence.useQuery(
    undefined,
    queryOptions,
  );

  const [evidence, setEvidence] = useEvidence(allEvidence.data ?? []);
  const [ghosts, possibleEvidence] = usePossibleGhosts(
    evidence,
    allGhosts.data ?? [],
  );

  return (
    <main className="flex h-screen w-screen flex-col bg-background">
      <div className="flex" style={{ height: "calc(100vh - 12rem)" }}>
        <EvidenceWrapper evidence={evidence} setEvidence={setEvidence} />
        <GhostWrapper ghosts={ghosts} evidence={evidence} />
        <Card className="h-full w-1/4 rounded-none border-y-0 border-r-0 bg-slate-900"></Card>
      </div>
      <section className="h-48 border-t bg-slate-900"></section>
    </main>
  );
};

export default AppWrapper;
