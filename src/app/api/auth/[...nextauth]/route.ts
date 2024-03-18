import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/libs/prisma";
import { user } from "@prisma/client";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user: user | null = await db.user.findFirst({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
        });

        if (user) {
          return {
            id: `${user.id}`,
            username: user.username,
            password: user.password,
          };
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
