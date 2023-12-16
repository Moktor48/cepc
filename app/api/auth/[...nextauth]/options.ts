import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/db";
import { z } from "zod";
import bcrypt from 'bcrypt'

const loginUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3, 15}$/g, 'Invalid Username'),
    password: z.string().min(8, 'Password must have more than 8 characters')
})

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({

            name: "credentials",
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

        async authorize(credentials) {

            if(!credentials || !credentials.username || !credentials.password) {
                return null
            }

            const user = await prisma.user.findUnique({
                where: {
                    username: credentials.username
                }
            })

            if(!user) {
                return null
            }

            const passCheck = await bcrypt.compare(credentials.password, user.password)

            if (!passCheck){
                return null
            }

            return {
                ...user,
                id: String(user.id),
            }
        }

        })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
/*
    pages: {
        signIn: '/app/login',
    },
*/
    callbacks: {
 

        async jwt({ token, user }) {
                return token;
        },

        async session({ session, token, user }) {
            return session;
        }
    },
}