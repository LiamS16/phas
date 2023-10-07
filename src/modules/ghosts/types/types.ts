import type { evidence } from "~/server/api/data/types";
import type { EVIDENCEVALUE } from "./evidenceValue";

export interface IMenuEvidence {
  id: evidence;
  name: string;
  value: EVIDENCEVALUE;
}
