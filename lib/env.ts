import { z } from "zod";

const envSchema = z.object({
  BASE_URL: z.string().nonempty(),
  MOVIE_API_KEY: z.string().nonempty(),
  IMAGE_URL: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
