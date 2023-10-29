// Inquiries to add email to a contact in cepc.email
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request) {
    const res = await request.json()
    const result = await prisma.email.create({
        data: res
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest) {
    const contact = await prisma.email.findMany()
    return NextResponse.json(contact)
  }