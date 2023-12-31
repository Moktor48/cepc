import { NextApiRequest, NextApiResponse } from "next";
import {z} from 'zod'
import prisma from "../db";
import bcrypt from 'bcryptjs'

const registerUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3, 15}$/g, 'Invalid Username'),
    password: z.string().min(8, 'Password must have more than 8 characters')
})

export default async function RegisterUser(req: NextApiRequest, res: NextApiResponse) {

    const {username, password} = registerUserSchema.parse(req.body);
    const user = await prisma.user.findUnique({
        where: {username}
    })

    if (user != null) {
        return res.send({user: null, message: 'User already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword
        }
    });


    return res.send({user: newUser, message: 'User created'})
}