import GoogleProvider from "next-auth/providers/google";
import { configs } from "./configs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Auth } from "./types";
import { prisma } from "./db";

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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@google.com",
        },
        password: { label: "Password", type: "password" },
        auth: { label: "AuthType", type: "text" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        console.log("authorize () ;", { credentials });

        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        if (credentials.auth === Auth.SIGNIN) {
          const users = await prisma.user.findMany();
          const validUser = users.find(
            (user) => user.email === email && user.password === password
          );

          if (!validUser) {
            return null;
          }

          return validUser;
        }
        return null;

        // const user = { id: "1", name: "win", email: "min@min" };

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },

  secret: "apple",
};
