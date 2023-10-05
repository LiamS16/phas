import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { GHOSTS } from "../data/ghosts";

export const ghosstRouter = createTRPCRouter({
  getAllGhosts: publicProcedure.query(() => {
    return Object.values(GHOSTS);
  }),
});
