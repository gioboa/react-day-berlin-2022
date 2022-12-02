/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma';
import { publicProcedure, router } from '../trpc';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
export const defaultAuthorSelect = Prisma.validator<Prisma.AuthorSelect>()({
  id: true,
  firstName: true,
  lastName: true,
  country: true,
  createdAt: true,
  updatedAt: true,
});

export const authorRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.author.findMany({
      select: defaultAuthorSelect,
      orderBy: { createdAt: 'desc' },
    });
  }),
  add: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1).max(32),
        lastName: z.string().min(1),
        country: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const exists = await prisma.author.findFirst({ where: { lastName: input.lastName } });
      // await prisma.$queryRaw`SELECT id FROM Author WHERE lastName = ${input.lastName}`;

      if (exists) {
        throw new TRPCError({ code: 'CONFLICT', message: 'LastName need to be unique' });
      }

      return await prisma.author.create({ data: input, select: defaultAuthorSelect });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input: { id } }) => {
      return await prisma.author.delete({ where: { id } });
    }),
});
