import prisma from "../lib/prisma";

async function main() {
  // Upsert users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "nikos@example.com" },
      update: {},
      create: {
        username: "Nikos Papadopoulos",
        email: "nikos@example.com",
        encryptedPassword: "password123",
      },
    }),
    prisma.user.upsert({
      where: { email: "eleni@example.com" },
      update: {},
      create: {
        username: "Eleni Georgiou",
        email: "eleni@example.com",
        encryptedPassword: "password123",
      },
    }),
  ]);

  // Upsert architects
  const architects = await Promise.all([
    prisma.architect.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: "Dimitris Pikionis",
        biography:
          "Dimitris Pikionis was a notable Greek architect, famous for his work around the Acropolis of Athens.",
      },
    }),
    prisma.architect.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: "Artemis Zenetou",
        biography:
          "Artemis Zenetou is a contemporary Greek architect known for her sustainable designs.",
      },
    }),
  ]);

  // Upsert buildings
  const buildings = await Promise.all([
    prisma.building.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: "The Acropolis Museum",
        address: "Athens, Greece",
        latitude: 37.9688,
        longitude: 23.7287,
        architectId: architects[1].id,
        constructionDate: new Date("2009-06-20"),
        description:
          "A modern museum housing ancient artifacts found in and around the Acropolis of Athens.",
      },
    }),
    prisma.building.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: "The Benaki Museum",
        address: "Athens, Greece",
        latitude: 37.9761,
        longitude: 23.7406,
        architectId: architects[0].id,
        constructionDate: new Date("1930-01-01"),
        renovationDate: new Date("2000-01-01"),
        description:
          "A museum with an extensive collection representing all periods of Greek history.",
      },
    }),
  ]);

  // Upsert architectural projects
  const projects = await Promise.all([
    prisma.architecturalProject.upsert({
      where: { id: 1 },
      update: {},
      create: {
        projectName: "The Acropolis Restoration",
        architectId: architects[0].id,
        address: "Athens, Greece",
        latitude: 37.9715,
        longitude: 23.7257,
        description:
          "An extensive restoration project of the Acropolis monuments.",
        projectType: "CULTURAL",
        timeline: new Date("1983-01-01"),
        addedByUserId: users[0].id,
      },
    }),
    prisma.architecturalProject.upsert({
      where: { id: 2 },
      update: {},
      create: {
        projectName: "New Athenian Cultural Center",
        architectId: architects[1].id,
        address: "Athens, Greece",
        latitude: 37.978,
        longitude: 23.736,
        description:
          "A modern cultural center designed to blend with the historical landscape of Athens.",
        projectType: "CULTURAL",
        timeline: new Date("2022-01-01"),
        addedByUserId: users[1].id,
      },
    }),
  ]);

  console.log({ users, architects, buildings, projects });
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
