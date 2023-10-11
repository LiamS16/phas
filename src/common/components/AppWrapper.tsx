import React from "react";
import GhostWrapper from "~/modules/ghosts/components/GhostWrapper";
import { api } from "~/utils/api";
import { queryOptions } from "../constants/query";
import { useEvidence } from "~/modules/evidence/hooks/useEvidence";
import useGhosts from "~/modules/ghosts/hooks/useGhosts";
import LeftColumn from "../../modules/toolbars/components/LeftColumn";
import { useSpeed } from "~/modules/evidence/hooks/useSpeed";
import Div100vh from "react-div-100vh";
import { useSanity } from "~/modules/evidence/hooks/useSanity";

const AppWrapper = (): JSX.Element => {
  const initData = api.ghost.getInitData.useQuery(undefined, queryOptions);

  const [evidence, setEvidence, evidenceReRender] = useEvidence(
    initData.data?.evidence ?? [],
  );
  const { sanity } = useSanity();
  const [ghostSpeed, speedReRender, setGhostSpeed] = useSpeed();
  const [ghosts, ruleOutGhost] = useGhosts(
    initData.data?.ghosts ?? [],
    evidence,
    evidenceReRender,
    speedReRender,
    ghostSpeed,
  );

  return (
    <Div100vh>
      <main className="flex h-full w-screen bg-black">
        <LeftColumn
          evidence={evidence}
          speed={ghostSpeed}
          setEvidence={setEvidence}
          toggleGhostSpeed={setGhostSpeed}
          sanity={sanity}
        />
        <GhostWrapper ghosts={ghosts} ruleOutGhost={ruleOutGhost} />
      </main>
    </Div100vh>
  );
};

export default AppWrapper;
