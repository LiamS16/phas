import React from "react";
import GhostCard from "./GhostCard";
import type { IClientGhost } from "../types/types";

interface IProps {
  ghosts: IClientGhost[];
  ruleOutGhost(ghostName: string, ruleOut: boolean): void;
}

const GhostWrapper = (props: IProps): JSX.Element => {
  const { ghosts } = props;

  return (
    <section className="flex grow flex-wrap justify-center gap-4 self-start p-6">
      {ghosts
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((g) => (
          // eslint-disable-next-line @typescript-eslint/unbound-method
          <GhostCard ghost={g} key={g.name} ruleOutGhost={props.ruleOutGhost} />
        ))}
    </section>
  );
};

export default GhostWrapper;
