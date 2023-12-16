import bcrypt from 'bcrypt';
import prisma from '@/app/db';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { username, email, password } = body.formData;

    if(!username || !email || !password) {
        return new NextResponse("Missing username, email, or password", {status:400})
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        return new NextResponse("Email already in use", {status:400})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            role: "user"
        }
    });

    return NextResponse.json(user)
}