import { randomUUID } from "crypto";
import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: text()
		.primaryKey()
		.$default(() => randomUUID()),
	name: varchar().notNull(),
	email: varchar().unique().notNull(),
	image: text(),
	createdAt: timestamp({
		withTimezone: true,
		mode: "date",
	})
		.notNull()
		.defaultNow(),
});
