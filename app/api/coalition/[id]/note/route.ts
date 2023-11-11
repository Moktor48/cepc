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
            coalition_id: parseInt(id, 10),
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
            coalition_id: parseInt(id, 10)            
        }
    })
    return NextResponse.json(req)
  }
  
