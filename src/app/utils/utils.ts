import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
}

const users = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

export const fetchUsers = async (search: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
