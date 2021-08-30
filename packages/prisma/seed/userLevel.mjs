import { client } from "./client.mjs";

const userLevels = [
  {
    id: 1,
    name: "admin",
  },
  {
    id: 2,
    name: "contributor",
  },
  {
    id: 3,
    name: "user",
  },
  {
    id: 4,
    name: "visitor",
  },
];

export const seedUserLevel = () =>
  Promise.all(
    userLevels.map((level) =>
      client.userLevel.upsert({
        where: { id: level.id },
        update: { name: level.name },
        create: level,
      })
    )
  );
