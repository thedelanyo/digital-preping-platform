import { tursoDB as db } from "$db/connections/turso.js";
import { prepTable as table } from "$db/schema/preps";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const creator_id = "113426c759eb76d09c4e1cd76";
  const creator_name = "Delanyo Agbenyo";
  await db.update(table).set({ creator_id, creator_name });

  return json("okay");
};
