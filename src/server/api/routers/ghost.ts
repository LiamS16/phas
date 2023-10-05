import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GHOSTS } from "../data/ghosts";
import { EVIDENCE } from "../data/evidence";

export const ghosstRouter = createTRPCRouter({
  getAllGhosts: publicProcedure.query(() => {
    return Object.values(GHOSTS);
  }),

  getAllEvidence: publicProcedure.query(() => {
    return Object.values(EVIDENCE);
  }),
});
