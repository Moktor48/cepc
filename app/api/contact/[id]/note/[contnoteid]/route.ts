// Inquiries to notes for specific coalitions in cepc.coal_notes

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.cont_note.create({
        data: {
            contact_id: parseInt(id, 10),
            note: json.note, 
            entry_date: json.entry_date
        }
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest,
    { params }: { params: {id: string } }) {
    const id = params.id
    const contact = await prisma.cont_note.findMany({
        where: {
            cont_id_email: parseInt(id, 10)            
        }
    })
    return NextResponse.json(contact)
  }

export async function PUT(
    request: Request, 
    { params }: { params: {id: string } }
) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.cont_note.update({
        where: {
            id: parseInt(id, 10)
        },
        data: {
            contact_id: json.contact_id || null,
            note: json.note || null, 
            entry_date: json.entry_date || null,  
        }
    })
    return NextResponse.json(updated)
  }

export async function PATCH(
    request: Request,
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.cont_note.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const deleted = await prisma.cont_note.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    return NextResponse.json(deleted)
}