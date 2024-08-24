'use server';

import type { ActionResponse } from '@/app/types';
import type { Goal } from '@prisma/client';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const getGoals = async () => {
  return await prisma.goal.findMany({ include: { segment: true } });
};

export const getGoal = async (id: number) => {
  const goal = await prisma.goal.findUnique({
    where: { id },
    include: {
      segment: true,
      tasks: {
        orderBy: { deadline: 'asc' },
      },
    },
  });
  if (!goal) notFound();

  return goal;
};

export const createGoal = async (
  prevState: any,
  formData: FormData
): Promise<ActionResponse<Goal>> => {
  const schema = z.object({
    segmentId: z.coerce.number(),
    name: z.string(),
    deadline: z.coerce.date(),
  });

  const parsedData = schema.safeParse({
    segmentId: formData.get('segmentId'),
    name: formData.get('name'),
    deadline: formData.get('deadline'),
  });

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data.' };
  }

  const { data } = parsedData;

  try {
    const segment = await prisma.segment.findUnique({
      where: { id: data.segmentId },
    });
    if (!segment) throw new Error('Segment not found');

    const goal = await prisma.goal.create({ data });

    revalidatePath('/goals');

    return { success: true, message: 'Goal created successfully.', data: goal };
  } catch (error) {
    return { success: false, message: 'Failed to create the goal.' };
  }
};
