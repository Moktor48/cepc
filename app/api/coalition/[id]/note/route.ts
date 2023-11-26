// Inquiries to notes for specific coalitions in cepc.coal_notes

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.coal_note.create({
        data: {
            id: json.id,
            coalition_id: id,
            note: json.note, 
            entry_date: json.entry_date
        }
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest,
    { params }: { params: {id: string } }) {
        const id = params.id    
        const json = await request.json()
    const req = await prisma.coal_note.findMany({
        where: {
            coalition_id: id         
        }
    })
    return NextResponse.json(req)
  }
  
