import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        if (credentials.email === "ederandrew0028@gmail.com" && credentials.password === "Sakuragi_@2024") {
          console.log("Login efetuado com sucesso!");
          return {
            id: "1",
            name: "Eder Andrew",
            email: "ederandrew0028@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
