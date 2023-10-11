import React from "react";
import {
  type SanityKey,
  type ISanity,
  type SecondaryEvidenceValue,
} from "~/modules/ghosts/types/types";
import SanityButton from "./SanityButton";

interface IProps {
  sanity: ISanity;
  setSanity(sanity: SanityKey, value: SecondaryEvidenceValue): void;
}

const SanityWrapper = (props: IProps): JSX.Element => {
  return (
    <div className="-mb-4 flex w-full flex-col gap-2 py-2">
      <div className="flex flex-col gap-2">
        {Object.values(props.sanity).map((sanity) => (
          <SanityButton
            {...sanity}
            key={sanity.name}
            // eslint-disable-next-line @typescript-eslint/unbound-method
            setSanity={props.setSanity}
          />
        ))}
      </div>
    </div>
  );
};

export default SanityWrapper;
