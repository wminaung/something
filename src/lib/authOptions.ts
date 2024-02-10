import GoogleProvider from "next-auth/providers/google";
import { configs } from "./configs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Auth } from "./types";
import { prisma } from "./db";
import { googleCallbackMiddleware } from "./utils";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: configs.GOOGLE_ID,
      clientSecret: configs.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        name: {
          label: "Username",
          type: "text",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@google.com",
        },
        password: { label: "Password", type: "password" },
        auth: { label: "AuthType", type: "text" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        console.log({ credentials });
        const { auth, email, name, password } = credentials;

        if (!auth || !email) {
          return null;
        }
        const isUserExist = await prisma.user.findUnique({
          where: { email: email },
        });

        if (auth === Auth.SIGN_UP && !!name && !isUserExist) {
          console.log("sign up start");
          const newUser = await prisma.user.create({
            data: { email: email, name: name, password: password },
          });
          console.log("new User ");
          return newUser;
        }

        const user = await prisma.user.findUnique({
          where: { email: email, password: password },
        });
        if (user) {
          return { id: user.id, email: user.email, name: user.name };
        }
        return null;
        //end
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signup",
  },
  callbacks: {
    async session({ session, token, trigger, user, newSession }) {
      console.log("sssss");

      await googleCallbackMiddleware(session);

      return session;
    },
  },

  secret: "apple",
};
