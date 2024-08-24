import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const segments = [
    { name: 'Default', description: 'Default segment' },
    { name: 'Health', description: 'Health related goals' },
    { name: 'Career', description: 'Career related goals' },
    { name: 'Personal', description: 'Personal development goals' },
    { name: 'Financial', description: 'Financial goals' },
    { name: 'Relationship', description: 'Relationship goals' },
    { name: 'Spiritual', description: 'Spiritual goals' },
    { name: 'Social', description: 'Social goals' },
    { name: 'Intellectual', description: 'Intellectual goals' },
    { name: 'Physical', description: 'Physical goals' },
  ]

  for (const segment of segments) {
    await prisma.segment.upsert({
      where: { name: segment.name },
      update: {},
      create: segment,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })