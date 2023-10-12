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

  const {
    evidence,
    setEvidence,
    evidenceReRender,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    resetEvidence,
    numOfEvidence,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    setNumOfEvidence,
  } = useEvidence(initData.data?.evidence ?? []);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { sanity, updateSanity, reRender, resetSanity } = useSanity();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { ghostSpeed, resetGhostSpeed, setGhostSpeed, speedReRender } =
    useSpeed();
  const [ghosts, ruleOutGhost, resetGhosts] = useGhosts({
    evidence,
    ghostReRender: evidenceReRender,
    speedReRender,
    speed: ghostSpeed,
    ghosts: initData.data?.ghosts ?? [],
    sanityReRender: reRender,
    sanity,
    setEvidence,
  });

  const handleReset = () => {
    resetEvidence();
    resetGhostSpeed();
    resetGhosts();
    resetSanity();
  };

  return (
    <Div100vh>
      <main className="flex h-full w-screen bg-black">
        <LeftColumn
          evidence={evidence}
          speed={ghostSpeed}
          setEvidence={setEvidence}
          toggleGhostSpeed={setGhostSpeed}
          sanity={sanity}
          setSanity={updateSanity}
          handleReset={handleReset}
          numOfEvidence={numOfEvidence}
          setNumOfEvidence={setNumOfEvidence}
        />
        <GhostWrapper ghosts={ghosts} ruleOutGhost={ruleOutGhost} />
      </main>
    </Div100vh>
  );
};

export default AppWrapper;
