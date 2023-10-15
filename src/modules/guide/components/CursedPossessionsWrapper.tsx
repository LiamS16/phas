import React from "react";
import type { ICursedPossesion } from "~/server/api/data/types";

interface IProps {
  possessions: ICursedPossesion[];
}

const CursedPossessionsWrapper = (props: IProps): JSX.Element => {
  const { possessions } = props;
  return (
    <div className="-mb-4 flex flex-col gap-2 py-2">
      {possessions.map((p) => (
        <button key={p.id}>{p.name}</button>
      ))}
    </div>
  );
};

export default CursedPossessionsWrapper;
