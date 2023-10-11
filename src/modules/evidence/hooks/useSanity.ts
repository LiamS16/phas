import { useState } from "react";
import {
  SecondaryEvidenceValue,
  type ISanity,
  type SanityKey,
} from "~/modules/ghosts/types/types";

export const useSanity = (): {
  sanity: ISanity;
  updateSanity(sanity: SanityKey, value: SecondaryEvidenceValue): void;
  reRender: boolean;
} => {
  const [reRender, triggerReRender] = useState<boolean>(false);
  const [sanity, setSanity] = useState<ISanity>({
    late: {
      minValue: 30,
      name: "Late",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "late",
    },
    normal: {
      minValue: 40,
      name: "Normal",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "normal",
    },
    early: {
      minValue: 50,
      name: "Early",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "early",
    },
    veryEarly: {
      minValue: 75,
      name: "Very Early",
      selected: SecondaryEvidenceValue.POSSIBLE,
      id: "veryEarly",
    },
  });

  const updateSanity = (sanity: SanityKey, value: SecondaryEvidenceValue) => {
    const update = (prev: ISanity) => {
      prev[sanity].selected = value;
      return prev;
    };

    setSanity((prev) => update(prev));
    triggerReRender((prev) => !prev);
  };

  return { sanity, updateSanity, reRender };
};
