
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/db";
import bcrypt from "bcrypt"

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                },
                password: {
                    label: "Password:",
                    type: "password",
                }
            },
        async authorize(credentials) {
            const res = await fetch("/api/user", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
            const user = await res.json()
            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            } else {
            return null
            }
        }
    })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if(user) token.role = user.role
            return token
        },
        async session({ session, token }) {
            if(session?.user) session.user.role = token.role
            return session
        }
    }

}