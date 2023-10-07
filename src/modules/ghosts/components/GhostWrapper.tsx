import React from "react";
import type { IGhost } from "~/server/api/data/types";
import GhostCard from "./GhostCard";

interface IProps {
  ghosts: IGhost[];
}

const GhostWrapper = (props: IProps): JSX.Element => {
  const { ghosts } = props;

  return (
    <section className="grid w-1/2 grid-cols-3 gap-4 p-6">
      {ghosts.map((g) => (
        <GhostCard ghost={g} key={g.name} />
      ))}
    </section>
  );
};

export default GhostWrapper;
