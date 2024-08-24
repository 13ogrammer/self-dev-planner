'use server';

import type { ActionResponse } from '@/app/types';
import type { Task } from '@prisma/client';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const getTasks = async () => {
  return await prisma.task.findMany({
    orderBy: { deadline: 'asc' },
  });
};

export const toggleTask = async ({ id }: { id: number }) => {
  const task = await prisma.task.findFirst({ where: { id } });
  if (!task) {
    notFound();
  }

  await prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  });

  revalidatePath('/tasks');
};

export const createTask = async (
  prevState: any,
  formData: FormData
): Promise<ActionResponse<Task>> => {
  const schema = z.object({
    goalId: z.coerce.number(),
    title: z.string(),
    deadline: z.coerce.date().optional(),
  });

  const parsedData = schema.safeParse({
    goalId: formData.get('goalId'),
    title: formData.get('title'),
    deadline: formData.get('deadline'),
  });

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data.' };
  }

  const { data } = parsedData;

  try {
    const task = await prisma.task.create({ data });

    revalidatePath('/tasks');

    return { success: true, message: 'Task created successfully.', data: task };
  } catch (error) {
    return { success: false, message: 'Failed to create task.' };
  }
};
