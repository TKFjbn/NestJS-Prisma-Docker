// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
    /*
    const post1 = await prisma.note.upsert({
        where: { description: 'Tarea 1' },
        update: {},
        create: {
            description: 'Tarea 1',
        },
    });

    const post2 = await prisma.card.upsert({
        where: { title: "Titulo 1" },
        update: {},
        create: {
            title: "Titulo 1",
        },
    });

    console.log({ post1, post2 });
    */
    }

    // execute the main function
    main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });