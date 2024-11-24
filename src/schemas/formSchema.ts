import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha inválida"),
});
