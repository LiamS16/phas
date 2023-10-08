import { useState } from "react";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";

export const useSpeed = (): [IGhostSpeed, (speed: GhostSpeed) => void] => {
  const [speed, setSpeed] = useState<IGhostSpeed>({
    fast: { name: "fast", selected: false },
    normal: { name: "normal", selected: false },
    slow: { name: "slow", selected: false },
  });

  const speedToggle = (speed: GhostSpeed) => {
    setSpeed((prev) => {
      prev[speed].selected = !prev[speed].selected;
      return prev;
    });
  };

  return [speed, speedToggle];
};
