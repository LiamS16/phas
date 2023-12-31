import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GHOSTS } from "../data/ghosts";
import { EVIDENCE } from "../data/evidence";
import { MAPS } from "../data/maps";

export const ghostRouter = createTRPCRouter({
  getInitData: publicProcedure.query(() => {
    return {
      ghosts: Object.values(GHOSTS),
      evidence: Object.values(EVIDENCE),
      maps: MAPS,
    };
  }),
});
