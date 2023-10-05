import React from "react";
import GhostCard from "~/modules/ghosts/components/GhostCard";
import { Card } from "~/modules/shad/components/ui/card";
import { api } from "~/utils/api";

const AppWrapper = (): JSX.Element => {
  const allGhosts = api.ghost.getAllGhosts.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="flex h-screen w-screen flex-col bg-background">
      <div className="flex" style={{ height: "calc(100vh - 12rem)" }}>
        <Card className="h-full w-1/4 rounded-none border-y-0 border-l-0 bg-slate-900"></Card>
        <section className="grid w-1/2 grid-cols-3 gap-4 p-6">
          {allGhosts.data?.map((g) => <GhostCard {...g} key={g.name} />)}
        </section>
        <Card className="h-full w-1/4 rounded-none border-y-0 border-r-0 bg-slate-900"></Card>
      </div>
      <section className="h-48 border-t bg-slate-900"></section>
    </main>
  );
};

export default AppWrapper;
