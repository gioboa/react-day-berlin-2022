/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { authorRouter } from './author';

export const appRouter = router({
  author: authorRouter,
});

export type AppRouter = typeof appRouter;
