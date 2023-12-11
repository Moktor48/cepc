import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.cont_note.create({
        data: {
            id: json.id,
            contact_id: id,
            note: json.note, 
            entry_date: json.entry_date
        }
    })
    return NextResponse.json({result})
}
// This API works 

export async function GET(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id
    const contact = await prisma.cont_note.findMany({
        where: {
            contact_id: id            
        }
    })
    return NextResponse.json(contact)
  }
// This API works

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
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const deleted = await prisma.cont_note.delete({
    where: {
        id: id
    }
    })

    return NextResponse.json(deleted)
}