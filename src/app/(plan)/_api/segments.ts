'use server'

import { prisma } from '@/lib/prisma'

export const getSegments = async () => {
  return await prisma.segment.findMany()
}