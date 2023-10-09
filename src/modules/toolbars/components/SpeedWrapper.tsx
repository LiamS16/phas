import React from "react";
import MenuCheckbox from "./MenuCheckbox";
import type { GhostSpeed, IGhostSpeed } from "~/modules/ghosts/types/types";

interface IProps {
  speed: IGhostSpeed;
  toggleGhostSpeed(speed: GhostSpeed, value: boolean): void;
}

const SpeedWrapper = (props: IProps): JSX.Element => {
  return (
    <div className="-mb-4 flex flex-col gap-2 py-2">
      <div className="flex flex-col">
        {Object.values(props.speed).map((speed) => (
          <MenuCheckbox
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
