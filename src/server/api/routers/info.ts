import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { CURSEDPOSSESIONS } from "../data/cursedPossessions";

export const infoRouter = createTRPCRouter({
  getAllCursedPossessions: publicProcedure.query(() => {
    return CURSEDPOSSESIONS;
  }),
});
