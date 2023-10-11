import { useState } from "react";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";

export const useSpeed = (): [
  IGhostSpeed,
  boolean,
  (speed: GhostSpeed, value: boolean) => void,
] => {
  const [reRender, triggerReRender] = useState<boolean>(false);
  const [speed, setSpeed] = useState<IGhostSpeed>({
    fast: { name: "Fast", selected: false, id: "fast", speedRange: [1.8, 10] },
    normal: {
      name: "Normal",
      selected: false,
      id: "normal",
      speedRange: [1.5, 2],
    },
    slow: { name: "Slow", selected: false, id: "slow", speedRange: [0, 1.6] },
  });

  const speedToggle = function (speed: GhostSpeed, value: boolean) {
    setSpeed((prev) => {
      prev[speed].selected = value;
      return prev;
    });

    triggerReRender((prev) => !prev);
  };

  return [speed, reRender, speedToggle];
};
