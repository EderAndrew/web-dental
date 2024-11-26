"use server";
import { Signin } from "@/interfaces/signin";
import { SignupFormSchema } from "@/schemas/formSchema";
import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const signup = async (formData: Signin) => {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      email: formData.email,
      password: formData.password,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const resp = await fetch(`${process.env.NEXT_API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await resp.json();

    if (!data) return { message: "Usuário e/ou senha incorretos!", status: 401, data: null };

    const cookieStore = await cookies();
    cookieStore.set("token", data.token);

    return { message: "Usuário logado com sucesso!", status: 200, data };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
