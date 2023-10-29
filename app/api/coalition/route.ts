// General Inquiries to cepc.coalition

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request) {
    const json = await request.json()
    const result = await prisma.coalition.create({
        data: json
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest) {
    const contact = await prisma.coalition.findMany()
    return NextResponse.json(contact)
  }

