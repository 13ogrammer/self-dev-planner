'use server';

import type { ActionResponse } from '@/app/types';
import type { Goal } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const getGoals = async () => {
  return await prisma.goal.findMany();
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

    const goal = await prisma.goal.create({
      data: {
        segmentId: data.segmentId,
        name: data.name,
        deadline: data.deadline,
      },
    });

    revalidatePath('/goals');

    return { success: true, message: 'Goal created successfully.', data: goal };
  } catch (error) {
    return { success: false, message: 'Failed to create the goal.' };
  }
};
