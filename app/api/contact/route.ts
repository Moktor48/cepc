import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()



export async function POST(request: Request) {
    const res = await request.json()
    const {formData} = res;
    const result = await prisma.contact.create({
        data: formData
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest) {
    const contact = await prisma.contact.findMany()
    return NextResponse.json(contact)
  }


