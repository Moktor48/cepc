// Inquiries to notes for specific contacts in cepc.cont_notes
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()



export async function POST(
    request: Request,
    { params }: { params: { id: string }}
    ) {
    const json = await request.json()

    const created = await prisma.cont_notes.create({
        data: {
            ...json,
            coalition_id: String(params.id)
        }
    })
    return new NextResponse(JSON.stringify(created), { status: 201 })
}

export async function GET(request: NextRequest) {
    const contact = await prisma.cont_notes.findMany()
    return NextResponse.json(contact)
  }