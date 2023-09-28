import connectToDb from "@/db/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/userSchema";

export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email } = credentials;
        try {
          await connectToDb();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
