'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { notFound } from 'next/navigation'

export const getTasks = async () => {
  return await db.task.findMany()
}

export const toggleTask = async ({ id }: { id: number }) => {
  const task = await db.task.findFirst({ where: { id } })
  if (!task) {
    notFound()
  }

  await db.task.update({
    where: { id },
    data: { completed: !task.completed },
  })

  revalidatePath('/tasks')
}

export const createTask = async (formData: FormData) => {
  const title = formData.get('title') as string

  await db.task.create({ data: { title } })

  revalidatePath('/tasks')
}