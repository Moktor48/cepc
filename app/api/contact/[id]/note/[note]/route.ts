// Inquiries to notes for specific coalitions in cepc.coal_notes

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(request: NextRequest,
    { params }: { params: {id: string } }) {
    const id = params.id
    const contact = await prisma.cont_note.findMany({
        where: {
            contact_id: id            
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
            id: id
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
        id: id
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {note: string } }
  ) {
    const id = params.note
    const deleted = await prisma.cont_note.delete({
    where: {
        id: id
    }
    })

    return NextResponse.json(deleted)
}