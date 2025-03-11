


import GitHubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [

    CredentialProvider({
      name : "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "enter your email here"},
        password: { label: "Password", type: "text"}
      },
      
      async authorize(credentials, req) {
        const username = credentials?.username
        const password = credentials?.password

        const user = { // Why Is This Used? For testi ng authentication without a database.

          name : "Harry",
          id : "1",
          username: "harry@gmai l.com" 
        }

        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  // pages: {
  //   signIn: "/auth/signin",
  // }
})


export { handler as GET, handler as POST }
















// import NextAuth from "next-auth";
// import type { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import type { JWT } from "next-auth/jwt";
// import { db } from "@/lib/db";
// import bcrypt from "bcryptjs";


// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(db),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "Enter your email here" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         const user = await db.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error("Invalid credentials");
//         }

//         return user;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   }, 
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: any }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }: { session: any; token: JWT; user?: any }) {
//       if (session.user) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/auth/login",
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
