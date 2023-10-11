import { useState } from "react";
import {
  SecondaryEvidenceValue,
  type ISanity,
} from "~/modules/ghosts/types/types";

export const useSanity = (): { sanity: ISanity } => {
  const [sanity, setSanity] = useState<ISanity>({
    late: {
      minValue: 30,
      name: "Late",
      selected: SecondaryEvidenceValue.POSSIBLE,
    },
    normal: {
      minValue: 40,
      name: "Normal",
      selected: SecondaryEvidenceValue.POSSIBLE,
    },
    early: {
      minValue: 50,
      name: "Early",
      selected: SecondaryEvidenceValue.POSSIBLE,
    },
    veryEarly: {
      minValue: 75,
      name: "Very Early",
      selected: SecondaryEvidenceValue.POSSIBLE,
    },
  });

  return { sanity };
};
