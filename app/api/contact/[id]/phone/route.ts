// Inquiries to add a phone number to a specific contact in cepc.phone
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()



export async function POST(request: Request) {
    const res = await request.json()
    const {formData} = res;
    const result = await prisma.phone.create({
        data: formData
    })
    return NextResponse.json({result})
}