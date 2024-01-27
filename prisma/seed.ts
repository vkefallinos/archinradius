import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.user.upsert({
      where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        username: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        encryptedPassword: "asas",
      },
    }),
    prisma.user.upsert({
      where: { email: "lee@vercel.com" },
      update: {},
      create: {
        username: "Lee Robinson",
        email: "lee@vercel.com",
        encryptedPassword: "asas",
      },
    }),
    await prisma.user.upsert({
      where: { email: "stey@vercel.com" },
      update: {},
      create: {
        username: "Steven Tey",
        email: "stey@vercel.com",
        encryptedPassword: "asas",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
