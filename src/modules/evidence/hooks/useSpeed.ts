import { useState } from "react";
import {
  SecondaryEvidenceValue,
  type GhostSpeed,
  type IGhostSpeed,
} from "~/modules/ghosts/types/types";

export const useSpeed = (): {
  ghostSpeed: IGhostSpeed;
  speedReRender: boolean;
  setGhostSpeed(speed: GhostSpeed, value: SecondaryEvidenceValue): void;
  resetGhostSpeed(): void;
} => {
  const [reRender, triggerReRender] = useState<boolean>(false);
  const [speed, setSpeed] = useState<IGhostSpeed>({
    fast: {
      name: "Fast",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "fast",
      speedRange: [1.8, 10],
    },
    normal: {
      name: "Normal",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "normal",
      speedRange: [1.5, 2],
    },
    slow: {
      name: "Slow",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "slow",
      speedRange: [0, 1.6],
    },
  });

  const speedToggle = function (
    speed: GhostSpeed,
    value: SecondaryEvidenceValue,
  ) {
    setSpeed((prev) => {
      prev[speed].selected = value;
      return prev;
    });

    triggerReRender((prev) => !prev);
  };

  const resetSpeed = () => {
    const reset = (prev: IGhostSpeed) => {
      for (const s of Object.values(prev)) {
        prev[s.id].selected = SecondaryEvidenceValue.POSSIBLE;
      }

      return prev;
    };

    setSpeed((prev) => reset(prev));
  };

  return {
    ghostSpeed: speed,
    resetGhostSpeed: resetSpeed,
    setGhostSpeed: speedToggle,
    speedReRender: reRender,
  };
};
