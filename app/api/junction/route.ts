// Inquiries to link specific coalitions and contacts in cepc.junction

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request) {
    const res = await request.json()
    const result = await prisma.junction.create({
        data: res
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest) {
    const junction = await prisma.junction.findMany()
    return NextResponse.json(junction)
  }

  