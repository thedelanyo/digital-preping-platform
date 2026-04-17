import { generateId } from "$lib/helpers/id";

export const load = async () => {
  const creator = { name: "Delator Agbenyo", id: generateId() };

  return { creator };
};
