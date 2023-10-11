import React from "react";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";
import SpeedButton from "./SpeedButton";

interface IProps {
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed, value: boolean): void;
}

const SpeedWrapper = (props: IProps): JSX.Element => {
  return (
    <div className="-mb-4 flex w-full flex-col gap-2 py-2">
      <div className="flex flex-col gap-2">
        {Object.values(props.speed).map((speed) => (
          <SpeedButton
            key={speed.name}
            title={speed.name}
            // eslint-disable-next-line @typescript-eslint/unbound-method
            toggleGhostSpeed={props.toggleGhostSpeed}
            active={speed.selected}
            val={speed.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeedWrapper;
