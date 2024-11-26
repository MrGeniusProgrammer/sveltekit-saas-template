import { env } from "@/env";
import pino from "pino";
import { effectTaskEitherBoth } from "./fp-ts";

const rootLogger =
	env.NODE_ENV === "development"
		? pino({
				level: env.LOG_LEVEL,
				browser: {
					disabled: globalThis.window === undefined,
				},
				transport: {
					target: "pino-pretty",
				},
				redact: [
					"*.password",
					"*.hashedPassword",
					"*.passwordHash",
					"*.session.id",
					"password",
					"passwordHash",
					"hashedPassword",
					"*.oldPassword",
					"*.newPassword",
					"oldPassword",
					"newPassword",
				],
				nestedKey: "payload",
			})
		: pino({
				level: env.LOG_LEVEL,
				browser: {
					disabled: globalThis.window === undefined,
				},
				redact: [
					"*.password",
					"*.hashedPassword",
					"*.passwordHash",
					"*.session.id",
					"password",
					"passwordHash",
					"hashedPassword",
					"*.oldPassword",
					"*.newPassword",
					"oldPassword",
					"newPassword",
				],
				nestedKey: "payload",
			});

export const getLogSuccessMessage = (message: string) => `${message} succeeded`;
export const getLogErrorMessage = (message: string) => `${message} failed`;

export const simpleLogTaskEitherBoth = (message: string) =>
	effectTaskEitherBoth(
		(value) => rootLogger.error(value, getLogErrorMessage(message)),
		(value) => rootLogger.info(value, getLogSuccessMessage(message)),
	);

export { rootLogger as logger };
