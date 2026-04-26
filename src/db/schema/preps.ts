import { prepletInit } from "$db/connections/dexie";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { writable } from "svelte/store";

export const prepTable = sqliteTable("preps", {
  id: text("id", "").primaryKey(),
  course_id: text("course_id").default("").notNull(),
  course_title: text("course_title").default("").notNull(),
  question: text("question").default("").notNull(),
  options: text("options", { mode: "json" }).$type<string[]>().notNull(),
  answer_code: integer("answer_code").default(0).notNull(),
  topics: text("topics").default("").notNull(),
  creator_name: text("creator_name").default("").notNull(),
  creator_id: text("creator_id").default("").notNull(),
});

type Question = {
  title: string;
  options: string[];
  answer_code: number;
};

export const prepInit = {
  course_id: "",
  course_title: "",
  topics: [] as string[],
  questions: [] as Question[],
};

export type Prep = typeof prepInit;

export const prep = writable(prepInit);
export const preplet = writable(prepletInit);
