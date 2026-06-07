import { en } from "./en";
import { es } from "./es";

export type Language = "es" | "en";

type DeepStringify<T> = T extends string ? string : { [K in keyof T]: DeepStringify<T[K]> };

export type TranslationDict = DeepStringify<typeof es>;

export const translations: Record<Language, TranslationDict> = { es, en };
