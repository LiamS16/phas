import { createTRPCRouter } from "~/server/api/trpc";
import { ghostRouter } from "./routers/ghost";
import { infoRouter } from "./routers/info";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  ghost: ghostRouter,
  info: infoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
