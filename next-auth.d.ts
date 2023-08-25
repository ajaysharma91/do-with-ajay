import NextAuth from "next-auth/next";
declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      tokenType: string;
      username: string;
      email: string;
    };
  }
}
declare module 'next-auth/client'
