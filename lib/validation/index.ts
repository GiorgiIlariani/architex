import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(5, "minimum 5 characters"),
  text: z.string().min(10, "minimum 10 charachters"),
});
