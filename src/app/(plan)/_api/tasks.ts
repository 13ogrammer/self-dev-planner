'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { notFound } from 'next/navigation'

export const getTasks = async () => {
  return await prisma.task.findMany()
}

export const toggleTask = async ({ id }: { id: number }) => {
  const task = await prisma.task.findFirst({ where: { id } })
  if (!task) {
    notFound()
  }

  await prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  })

  revalidatePath('/tasks')
}

export const createTask = async (formData: FormData) => {
  const goalId = Number(formData.get('goalId') as string)
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await prisma.task.create({ data: { goalId, title, content } })

  revalidatePath('/tasks')
}