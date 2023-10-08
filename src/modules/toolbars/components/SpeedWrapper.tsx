import React from "react";
import MenuCheckbox from "./MenuCheckbox";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";

interface IProps {
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed): void;
}

const SpeedWrapper = (props: IProps): JSX.Element => {
  const speeds: GhostSpeed[] = ["fast", "normal", "slow"];

  const handleSpeedClick = (speed: GhostSpeed): void => {
    props.toggleGhostSpeed(speed);
  };

  return (
    <div className="-mb-4 flex flex-col gap-2 py-2">
      <div className="flex flex-col">
        {speeds.map((speed) => (
          <MenuCheckbox
            key={speed}
            title={speed ?? ""}
            onClick={() => handleSpeedClick(speed)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeedWrapper;
