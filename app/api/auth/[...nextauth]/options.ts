
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/db";
import { z } from "zod";
import bcrypt from 'bcryptjs'

const loginUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3, 15}$/g, 'Invalid Username'),
    password: z.string().min(8, 'Password must have more than 8 characters')
})

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text"
                },
                password: {
                    label: "Password:",
                    type: "password"
                }
            },
        async authorize(credentials, req) {

            const {username, password} = loginUserSchema.parse(credentials)

            const user = await prisma.user.findUnique({
                where: {username}
            });

            if (!user) return null;

            const passwordValid = await bcrypt.compare(password, user.password)

            if (!passwordValid) return null;

            return user;
            }

        })],


    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id;
            return session;

        },

        async jwt({ token, user }) {
            if(user) token.role = user.role
            return token;
        }
    },

    pages: {
        signIn: '/login',
    },

    session: {
        strategy: 'jwt',
    },
}
