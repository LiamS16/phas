import React from "react";
import { Card } from "~/modules/shad/components/ui/card";

const AppWrapper = (): JSX.Element => {
  return (
    <main className="flex h-screen w-screen bg-background">
      <Card className="h-full w-1/5 rounded-none bg-slate-900"></Card>
      <section className="grow"></section>
      <Card className="h-full w-1/5 rounded-none bg-slate-900"></Card>
    </main>
  );
};

export default AppWrapper;
