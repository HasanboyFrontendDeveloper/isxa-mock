import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./mongoos";
import User from "@/database/user.model";

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectToDatabase();

//         const user = User.findOne({ username: credentials?.username });

//         return user;
//       },
//     }),
//   ],
//   callbacks: {
//     // async session({ session }: any) {
//     //   await connectToDatabase();

//     //   const isUserExist = User.findOne({ username: session.user.username });

//     //   if (!isUserExist) {

//     //   }
//     // },
//     async session({ session }: any) {
//       await connectToDatabase();
//       const isExistingUser = await User.findOne({ username: session.user.email });
//       if (!isExistingUser) {
//         const newUser = await User.create({
//           email: session.user.email,
//           name: session.user.name,
//           profileImage: session.user.image,
//         });
//         session.currentUser = newUser;
//       }
//       session.currentUser = isExistingUser;
//       return session;
//     },

//     async redirect({ url, baseUrl }) {
//       return baseUrl;
//     },
//   },
//   debug: process.env.NODE_ENV === "development",
//   session: { strategy: "jwt" },
//   jwt: { secret: process.env.NEXTAUTH_JWT_SECRET! },
//   secret: process.env.NEXTAUTH_SECRET!,
// };

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();

        const user = User.findOne({ username: credentials?.username });

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      await connectToDatabase();
      const isExistingUser = await User.findOne({
        username: session.user.username,
      });
      if (!isExistingUser) {
        const newUser = await User.create({
          username: session.user.username,
          name: session.user.name,
          profileImage: session.user.image,
        });
        session.currentUser = newUser;
      }
      session.currentUser = isExistingUser;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  jwt: { secret: process.env.NEXTAUTH_JWT_SECRET! },
  secret: process.env.NEXTAUTH_SECRET!,
};