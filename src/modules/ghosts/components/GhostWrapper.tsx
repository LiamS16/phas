import React from "react";
import type { IGhost } from "~/server/api/data/types";
import GhostCard from "./GhostCard";

interface IProps {
  ghosts: IGhost[];
}

const GhostWrapper = (props: IProps): JSX.Element => {
  const { ghosts } = props;

  return (
    <section className="flex grow flex-wrap justify-center gap-4 self-start p-6">
      {ghosts
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((g) => (
          <GhostCard ghost={g} key={g.name} />
        ))}
    </section>
  );
};

export default GhostWrapper;
