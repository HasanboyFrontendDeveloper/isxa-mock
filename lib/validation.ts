import * as z from "zod";

export const registerSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});
