
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { User } from "@/models/User";
import { ConnectDB } from "@/utils/ConnectDB";

export const authOptions = {
  secret: process.env.SECRET,
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        ConnectDB();
        const user = await User.findOne({ email });
        console.log(user)
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        console.log(passwordOk);
     
        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }