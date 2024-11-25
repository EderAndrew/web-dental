import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha inválida"),
});
