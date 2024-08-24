import { prisma } from '@/lib/prisma'

export const getGoals = async () => {
  return await prisma.goal.findMany()
}

export const createGoal = async (formData: FormData) => {
  const segmentId = Number(formData.get('segmentId') as string)
  const segment = await prisma.segment.findUnique({ where: { id: segmentId } })

  if (!segment) {
    throw new Error('Segment not found')
  }

  const name = formData.get('name') as string
  const deadline = formData.get('deadline') as string

  return await prisma.goal.create({
    data: {
      segmentId, name, deadline
    }
  })
}