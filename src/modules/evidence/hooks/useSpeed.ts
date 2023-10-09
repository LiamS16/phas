import { useState } from "react";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";

export const useSpeed = (): [
  IGhostSpeed,
  (speed: GhostSpeed, value: boolean) => void,
] => {
  const [, triggerReRender] = useState<boolean>(false);
  const [speed, setSpeed] = useState<IGhostSpeed>({
    fast: { name: "Fast", selected: false, id: "fast" },
    normal: { name: "Normal", selected: false, id: "normal" },
    slow: { name: "Slow", selected: false, id: "slow" },
  });

  const speedToggle = (speed: GhostSpeed, value: boolean) => {
    setSpeed((prev) => {
      prev[speed].selected = value;
      console.log(prev);
      return prev;
    });

    triggerReRender((prev) => !prev);
  };

  return [speed, speedToggle];
};
