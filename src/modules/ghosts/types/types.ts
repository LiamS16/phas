import type { evidence } from "~/server/api/data/evidence";

export interface IMenuEvidence {
  id: evidence;
  name: string;
  value: "selected" | "possible" | "ruled out" | "impossible";
}
