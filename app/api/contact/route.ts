import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(request: Request) {
    const res = await request.json()
    const result = await prisma.contact.create({
        data: res
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest) {
    const contact = await prisma.contact.findMany()
    return NextResponse.json(contact)
  }


